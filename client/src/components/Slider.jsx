import React, { useState } from 'react';
import styled from 'styled-components';
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import { sliderItems } from '../data.js';

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) =>{
    if(direction==="left"){
      setSlideIndex(slideIndex > 0? slideIndex-1 : sliderItems.length-1);
    }
    else{
      setSlideIndex(slideIndex < sliderItems.length-1? slideIndex+1 : 0);
    }
  }

  return (
    <Container>
      <Arrow direction="left" onClick={()=>handleClick("left")}>
        <ArrowBackIosOutlinedIcon />
      </Arrow>
      <Wrapper slide={slideIndex}>
        {sliderItems.map((item, index)=>{
          return (<Slide bg={item.bg} key={index}>
                    <ImageContainer>
                      <Image src={item.img} />
                    </ImageContainer>

                    <InfoContainer>
                      <Title>{item.title}</Title>
                      <Desc>{item.desc}</Desc>
                      <Button>SHOW NOW</Button>
                    </InfoContainer>
                  </Slide>)
        })}
      </Wrapper>
      <Arrow direction="right" onClick={()=>handleClick("right")}>
        <ArrowForwardIosOutlinedIcon />
      </Arrow>
    </Container>
  )
}

export default Slider

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
`;

const Arrow = styled.div`
  display: flex;
  height: 50px;
  width: 50px;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: #e7e2e2;
  cursor: pointer;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  left: ${props => props.direction==="left" && "10px"};
  right: ${props => props.direction==="right" && "10px"};
  opacity: 0.5;
  z-index: 2;
`;

const Wrapper = styled.div`
  display: flex;
  transition: 0.7s all ease-in;
  transform: translateX(calc(${props=> props.slide}*(-100vw)));
`;

const Slide = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  background-color: #${props=> (props.bg)};
`;

const ImageContainer = styled.div`
  height: 100vh;
  flex: 1;
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const InfoContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 40px;
  justify-content: center;
  padding: 0 40px;
`;

const Title = styled.h1`
  font-size: 50px;
`;

const Desc = styled.p`
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;

const Button = styled.button`
  padding: 10px;
  background-color: transparent;
  font-size: 20px;
  cursor: pointer;
  width: 150px;
`;