import React, { useState } from 'react';
import styled from "styled-components";
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Products from '../components/Products';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import { mobile } from '../responsive';
import { useLocation } from 'react-router-dom';

const ProductList = () => {
  const getCategory = useLocation().pathname.split("/")[2];
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest");
  const handleFilters = (e) =>{
    setFilters({
      ...filters,
      [e.target.name]: e.target.value
    });
  }

  return (
    <Container>
      <Announcement />
      <Navbar />
      <Title>{getCategory.charAt(0).toUpperCase() + getCategory.slice(1)}</Title>
      <FilterCont>
        <Filter>
          <FilterTitle>Filter Products</FilterTitle>
          <Select name="color" onChange={(e)=>handleFilters(e)}>
            <Option disabled>Color</Option>
            <Option>White</Option>
            <Option>Black</Option>
            <Option>Red</Option>
            <Option>Blue</Option>
            <Option>Yellow</Option>
            <Option>Green</Option>
          </Select>
          <Select name="size" onChange={(e)=>handleFilters(e)}>
            <Option disabled>Size</Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterTitle>Sort Products</FilterTitle>
          <Select onChange={(e)=> setSort(e.target.value)}>
            <Option value="newest">Newest</Option>
            <Option value="asc">Price (asc)</Option>
            <Option value="desc">Price (desc)</Option>
          </Select>
        </Filter>
      </FilterCont>
      <Products category={getCategory} filters={filters} sort={sort}/>
      <Newsletter />
      <Footer />
    </Container>
  )
}

export default ProductList

const Container = styled.div`

`;

const Title = styled.h1`
  margin-left: 20px;
  margin-top: 10px;
  ${mobile({ marginLeft: "10px" })};
`;

const FilterCont = styled.div`
  display: flex;
  padding: 15px;
  justify-content: space-between;
  ${mobile({ flexDirection: "column", alignItems: "flex-start", gap: "10px" })};
`;

const Filter = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
`;

const FilterTitle = styled.h3`

`;

const Select = styled.select`
  outline: none;
  padding: 5px;
  font-size: 16px;
`;

const Option = styled.option`
  
`;

