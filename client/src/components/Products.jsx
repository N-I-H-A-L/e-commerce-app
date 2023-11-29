import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import Product from "./Product.jsx";
import { mobile } from '../responsive.js';
import axiosClient from "../axios.js";

const Products = ({ category, filters, sort }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(()=>{
    const getData = async () =>{
      try{
        const res = await axiosClient.get(category? `/product?category=${category}` : "/product");
        setProducts(res.data);
      }
      catch(err){
        console.log(err);
      }
    }
    getData();
  }, [category]);

  useEffect(()=>{
    category &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
            //It will filter the products such that if any "item" contains any of the "key"s of "filters" and it's value (an array) includes the "value" of key of "filters" then it will be returned.
            //I know it's complicated. 
          )
        )
      );
  }, [products, category, filters]);

  useEffect(()=>{
    if(sort==="newest"){
      setFilteredProducts((prev)=>
        [...prev].sort((a, b)=> new Date(a.createdAt) - new Date(b.createdAt))
      );
    }
    else if(sort==="asc"){
      setFilteredProducts((prev)=>
        [...prev].sort((a, b)=> a.price - b.price)
      );
    }
    else{
      setFilteredProducts((prev)=>
        [...prev].sort((a, b)=> b.price - a.price)
      );
    }
  }, [sort]);

  return (
    <Container>
      {category? 
        filteredProducts.map((product)=>{
          return <Product product={product} key={product.id}/>
        })
      : products.slice(0, 8).map((product)=>{ //Display only 8 products
          return <Product product={product} key={product.id}/>
        })
      }
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