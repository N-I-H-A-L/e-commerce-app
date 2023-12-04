import React, { useState } from 'react';
import styled from "styled-components";
import Navbar from "../components/Navbar.jsx";
import Announcement from "../components/Announcement.jsx";
import Footer from "../components/Footer.jsx";
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { mobile } from '../responsive.js';
import { useSelector } from "react-redux";
import { userRequest, publicRequest } from "../axios.js";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const cart = useSelector(state=> state.cart);
  const products = cart.products;
  const navigate = useNavigate();

  const handlePayment = async () =>{
    if(cart.totalPrice===0){
      alert("Please add some products first.");
      return;
    }
    const res = await publicRequest.get("/getkey");
    const rzp_key = res.data.key;

    //'data' key of object returned by axios.post will contain the data sent by the server as response.
    const { data: { order } } = await userRequest.post("/checkout/payment", {
      //Destructured the 'data' object further to get the 'order' object of 'data'. 
      amount: cart.totalPrice
    });
     //Code given in Razorpay Docs
     const options = {
      key: rzp_key, 
      amount: order.amount, //amount received from the data of post request
      currency: "USD",
      name: "Nihal",
      order_id: order.id, //id received from the data of post request
      callback_url: "http://localhost:5000/api/checkout/verification", //We want the callback_url to be called to the API we created in the backend. 
      // And then razorpay will send data about the payment in the body of the POST request made to callback_url.
      redirect: false,
    };

    //In index.html, we've added a script for razorpay that's why we're able to use window.Razorpay.
    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  }

  return (
    <Container>
      <Announcement />
      <Navbar />
        <Wrapper>
          <Title>YOUR BAG</Title>
          <Top>
            <TopButton>CONTINUE SHOPPING</TopButton>
            <TopTexts>
              <TopText>Shopping Bag (2)</TopText>
              <TopText>Your Wishlist (0)</TopText>
            </TopTexts>
            <TopButton type="filled">CHECKOUT NOW</TopButton>
          </Top>
          <Bottom>
            <Info>
              {products.map((product)=>(
                  <Product>
                  <ProductDetails>
                    <Image src={product.image}/>
                    <ProductInfo>
                      <ProductName><b>Product: </b>{product.title}</ProductName>
                      <ProductId><b>ID: </b>{product._id}</ProductId>
                      <ProductColor color={product.color}/>
                      <ProductSize><b>Size: </b>{product.size}</ProductSize>
                    </ProductInfo>
                  </ProductDetails>
                  <PriceDetails>
                    <QuantityCont>
                      <RemoveOutlinedIcon />
                      <Quantity>{product.quantity}</Quantity>
                      <AddOutlinedIcon />
                    </QuantityCont>
                    <Price>$ {product.price*product.quantity}</Price>
                  </PriceDetails>
                </Product>
              ))}
              <Hr />
            </Info>
            <Summary>
              <SummaryTitle>ORDER SUMMARY</SummaryTitle>
              <Item>
                <ItemText>Subtotal</ItemText>
                <ItemText>$ {cart.totalPrice}</ItemText>
              </Item>
              <Item>
                <ItemText>Estimated Shipping</ItemText>
                <ItemText>$ 7.80</ItemText>
              </Item>
              <Item>
                <ItemText>Shipping Discount</ItemText>
                <ItemText>$ -7.80</ItemText>
              </Item>
              <Item>
                <ItemText type="total">Total</ItemText>
                <ItemText>$ {cart.totalPrice}</ItemText>
              </Item>
              <Button onClick={handlePayment}>CHECKOUT NOW</Button>
            </Summary>
          </Bottom>
        </Wrapper>
      <Footer />
    </Container>
  )
}

export default Cart

const Container = styled.div`
  
`;

const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })};
`;

const Title = styled.h1`
  text-align: center;
  font-weight: 300;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  font-weight: 600;
  cursor: pointer;
  padding: 10px;
  border: ${props=> props.type === "filled" && "none"};
  background-color: ${props=> props.type === "filled" ? "black" : "transparent"};
  color: ${props=> props.type === "filled" && "white"};
`;

const TopTexts = styled.div`
  ${mobile({ display: "none" })};
`;

const TopText = styled.div`
  text-decoration: underline;
  cursor: pointer;
  margin: 0 10px;
`;

const Bottom = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })};
`;

const Info = styled.div`
  display: flex;
  flex: 3;
  flex-direction: column;
`;

const Summary = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 30px;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 15px;
  height: 53vh;
`;

const Product = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin: 10px;
  ${mobile({ flexDirection: "column" })};
`;

const ProductDetails = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
`;

const ProductInfo = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span`

`;

const ProductId = styled.span`

`;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props=> props.color};
`;

const ProductSize = styled.span`

`;

const PriceDetails = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const QuantityCont = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const Quantity = styled.div`
  font-size: 24px;
  margin: 15px;
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Price = styled.div`
  font-size: 30px;
  font-weight: 200;
`;

const Hr = styled.hr`
  background-color: #eee;
  font-size: 30px;
  height: 1px;
  margin: 10px;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const Item = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ItemText = styled.div`
  font-weight: ${props=> props.type==="total" && 600};
  font-size: ${props=> props.type==="total" && "22px"};
`;

const Button = styled.button`
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
  cursor: pointer;
`;
