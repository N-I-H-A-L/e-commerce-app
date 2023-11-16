import React from 'react';
import styled from "styled-components";

const Announcement = () => {
  return (
    <Container>
      Super Deal! Free Shipping on Orders over $50
    </Container>
  )
}

export default Announcement

const Container = styled.div`
  height: 30px;
  background-color: teal;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 0px;
  font-size: 14px;
  font-weight: 500;
`;