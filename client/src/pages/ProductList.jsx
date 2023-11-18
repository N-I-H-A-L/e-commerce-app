import React from 'react';
import styled from "styled-components";
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Products from '../components/Products';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';

const ProductList = () => {
  return (
    <Container>
      <Announcement />
      <Navbar />
      <Title>Dresses</Title>
      <FilterCont>
        <Filter>
          <FilterTitle>Filter Products</FilterTitle>
          <Select>
            <Option disabled selected>Color</Option>
            <Option>White</Option>
            <Option>Black</Option>
            <Option>Red</Option>
            <Option>Blue</Option>
            <Option>Yellow</Option>
            <Option>Green</Option>
          </Select>
          <Select>
            <Option disabled selected>Size</Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterTitle>Sort Products</FilterTitle>
          <Select>
            <Option selected>Newest</Option>
            <Option>Price (asc)</Option>
            <Option>Price (desc)</Option>
          </Select>
        </Filter>
      </FilterCont>
      <Products />
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
`;

const FilterCont = styled.div`
  display: flex;
  padding: 15px;
  justify-content: space-between;
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

