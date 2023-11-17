import React from 'react';
import styled from 'styled-components';
import SendIcon from '@mui/icons-material/Send';

const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Desc>
        Get timely updates about your favorite products.
      </Desc>
      <InputCont>
        <Input placeholder="Your email"/>
        <Button>
          <SendIcon />
        </Button>
      </InputCont>
    </Container>
  )
}

export default Newsletter

const Container = styled.div`
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #fcf5f5;
`;

const Title = styled.h1`
  font-size: 50px;
  margin-bottom: 20px;
`;

const Desc = styled.div`
  font-size: 20px;
  margin-bottom: 20px;
`;

const InputCont = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 40px;
  border: 1px solid lightgray;
`;

const Input = styled.input`
  flex: 8;
  outline: none;
  padding: 10px;
  font-size: 16px;
  border: 1px solid lightgray;
  border-right: none;
  padding-right: 35px;
`;

const Button = styled.button`
  flex: 1;
  border: none;
  background-color: teal;
  color: white;
  border-bottom: 1px solid lightgray;
  height: 105%;
`;