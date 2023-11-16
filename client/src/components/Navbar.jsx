import React from 'react';
import styled from "styled-components";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Badge from '@mui/material/Badge';
import { IconButton } from '@mui/material';

const Navbar = () => {
  return (
    <Container>
        <Wrapper>
          <Left>
            <Language>EN</Language>
            <Search>
              <Input />
              <SearchIcon style={{color: "gray", fontSize: "16px"}}/>
            </Search>
          </Left>
          <Center>
            <Logo>CARTIFY~</Logo>
          </Center>
          <Right>
            <Item>REGISTER</Item>
            <Item>SIGN IN</Item>
            <Item>
              <IconButton aria-label="cart">
                <Badge badgeContent={4} color="secondary">
                  <ShoppingCartOutlinedIcon />
                </Badge>
              </IconButton>
            </Item>
          </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar

const Container = styled.div`
    height: 60px;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`;

const Search = styled.div`
  display: flex;
  border: 1px solid lightgray;
  justify-content: space-between;
  margin-left: 25px;
  align-items: center;
`;

const Input = styled.input`
  border: none;
  outline: none;
  padding: 5px;
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  gap: 25px;
  align-items: center;
  justify-content: flex-end;
`;

const Item = styled.div`

`;


