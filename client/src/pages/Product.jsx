import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import Announcement from '../components/Announcement';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { mobile } from '../responsive';
import { useLocation } from "react-router-dom";
import { publicRequest } from "../axios.js";
import { addProduct } from "../redux/cartSlice.js";
import { useDispatch } from "react-redux";

const Product = () => {
  const id = useLocation().pathname.split('/')[2];
  const [product, setProduct] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");

  const dispatch = useDispatch();

  useEffect(()=>{
    const getData = async () =>{
      try{
        const res = await publicRequest.get(`/product/${id}`);
        setProduct(res.data);
      }
      catch(err){
        console.log(err);
      }
    }
    getData();
  }, [id]);

  const addToCart = () =>{
    dispatch(addProduct({
      ...product,
      quantity,
      color, 
      size,
    }));
  }

  return (
    <Container>
      <Announcement />
      <Navbar />
      <Wrapper>
        <ImgContainer>
          <Image src={product.image} />
        </ImgContainer>
        <InfoContainer>
          <Title>{product.title}</Title>
          <Desc>
            {product.desc}
          </Desc>
          <Price>$ {product.price}</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              {product?.color?.map((col)=>{
                return <FilterColor color={col} key={col} onClick={(e)=> setColor(col)}/>
              })}
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize onChange={(e)=> setSize(e.target.value)}>
                {product?.size?.map((item)=>{
                  return <FilterSizeOption key={item}>{item}</FilterSizeOption>
                })}
              </FilterSize>
            </Filter>
          </FilterContainer>

          <AddContainer>
            <QuantityCont>
              <RemoveOutlinedIcon onClick={()=> {quantity>1 && setQuantity(quantity-1)}}/>
              <Quantity>{quantity}</Quantity>
              <AddOutlinedIcon onClick={()=> setQuantity(quantity+1)}/>
            </QuantityCont>
            <Button onClick={addToCart}>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  )
}

export default Product

const Container = styled.div`
`;

const Wrapper = styled.div`
  display: flex;
  padding: 30px;
  ${mobile({ flexDirection: "column", padding: "10px", paddingTop: "0" })};
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 80vh;
  object-fit: cover;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: "20px" })};
`;

const Title = styled.h1`
  font-weight: 300;
`;

const Desc = styled.p`
  margin: 15px 0px;
`;

const Price = styled.span`
  font-weight: 200;
  font-size: 30px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const Filter = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
`;

const FilterTitle = styled.div`
  font-size: 22px;
`;

const FilterColor = styled.div`
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background-color: ${props => props.color};
  cursor: pointer;
`;

const FilterSize = styled.select`
  padding: 5px;
  outline: none;
`;

const FilterSizeOption = styled.option`
  
`;

const QuantityCont = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  font-weight: 700;
`;

const Quantity = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const AddContainer = styled.div`
  margin-top: 40px;
  width: 45%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ width: "90%" })};
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 500;

  &:hover{
    background-color: #f8f4f4;
  }
  ${mobile({ width: "40vw" })};
`;