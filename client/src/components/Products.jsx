import React from 'react';
import styled from "styled-components";
import { popularProducts } from "../data.js";
import Product from "./Product.jsx";
import { mobile } from '../responsive.js';

const Products = () => {
  return (
    <Container>
      {popularProducts.map((product)=>{
        return <Product product={product} key={product.id}/>
      })}
    </Container>
  )
}

export default Products

const Container = styled.div`
  display: flex;
  padding: 20px;
  flex-wrap: wrap;
  ${mobile({ padding: "0" })};
`;