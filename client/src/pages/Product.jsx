import React from 'react';
import styled from "styled-components";
import Announcement from '../components/Announcement';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';

const Product = () => {
  return (
    <Container>
      <Announcement />
      <Navbar />
      <Wrapper>
        <ImgContainer>
          <Image src="https://i.ibb.co/S6qMxwr/jean.jpg" />
        </ImgContainer>
        <InfoContainer>
          <Title>Denim Jumpsuit</Title>
          <Desc>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at
            iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget
            tristique tortor pretium ut. Curabitur elit justo, consequat id
            condimentum ac, volutpat ornare.
          </Desc>
          <Price>$ 20</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="black" />
              <FilterColor color="darkblue" />
              <FilterColor color="gray" />
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>

          <AddContainer>
            <QuantityCont>
              <RemoveOutlinedIcon />
              <Quantity>1</Quantity>
              <AddOutlinedIcon />
            </QuantityCont>
            <Button>ADD TO CART</Button>
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
`;