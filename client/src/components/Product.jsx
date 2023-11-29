import Search from '@mui/icons-material/Search';
import ShoppingCartOutlined from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
  return (
    <Container>
      <Image src={product.image} />
      <Info>
        <Icon>
          <ShoppingCartOutlined />
        </Icon>
        <Icon>
          <Link to={`/product/${product._id}`}>
            <Search />
          </Link>
        </Icon>
        <Icon>
          <FavoriteBorderIcon />
        </Icon>
      </Info>
    </Container>
  )
}

export default Product

const Info = styled.div`
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.2);
  height: 100%;
  width: 100%;
  cursor: pointer;
  transition: all 0.5s ease;
  `;

const Container = styled.div`
  flex: 1;
  margin: 5px;
  height: 280px;
  min-width: 260px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;
  position: relative;

  &:hover ${Info}{
    opacity: 1;
  }
`;

const Image = styled.img`
  height: 100%;
  object-fit: cover;
`;

const Icon = styled.div`
  background-color: white;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  margin: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;

  &:hover{
    transform: scale(1.1);
    background-color: lightgray;
  }
`;