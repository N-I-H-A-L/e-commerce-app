import React from 'react';
import styled from 'styled-components';
import { mobile } from '../responsive';
import { Link } from 'react-router-dom';

const CategoryItem = ({ category }) => {
  return (
    <Container>
      {/* On clicking the item it will forward to this link (check App component) */}
      <Link to={`/products/${category.category}`}>
        <Image src={category.img} />
        <Info>
          <Title>{category.title}</Title>
          <Button>SHOP NOW</Button>
        </Info>
      </Link>
    </Container>
  )
}

export default CategoryItem

const Container = styled.div`
  flex: 1;
  margin: 5px;
  height: 70vh;
  position: relative;
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  ${mobile({ height: "40vh" })};
`;

const Title = styled.h1`
  color: white;
  margin-bottom: 20px;
`;

const Info = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  border: none;
  background-color: #afa8a8;
  color: white;
  padding: 10px;
  cursor: pointer;
  font-weight: 600;
  border-radius: 5px;
`;