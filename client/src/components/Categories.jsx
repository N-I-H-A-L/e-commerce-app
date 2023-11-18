import React from 'react';
import styled from "styled-components";
import { categories } from "../data.js";
import CategoryItem from './CategoryItem';
import { mobile } from '../responsive.js';

const Categories = () => {
  return (
    <Container>
      {categories.map((category)=>{
        return <CategoryItem category={category} key={category.id}/>
      })}
    </Container>
  )
}

export default Categories

const Container = styled.div`
  display: flex;
  padding: 15px;
  justify-content: space-between;
  ${mobile({ flexDirection: "column", padding: 0 })};
`;