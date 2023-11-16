import React from 'react';
import styled from "styled-components";
import { categories } from "../data.js";
import CategoryItem from './CategoryItem';

const Categories = () => {
  return (
    <Container>
      {categories.map((category)=>{
        return <CategoryItem category={category} />
      })}
    </Container>
  )
}

export default Categories

const Container = styled.div`
  display: flex;
  padding: 15px;
  justify-content: space-between;
`;