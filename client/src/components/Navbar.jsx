import React from 'react';
import styled from "styled-components";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Badge from '@mui/material/Badge';
import { IconButton } from '@mui/material';
import { mobile } from "../responsive.js";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const quantity = useSelector((state)=> state.cart.quantity);
  const navigate = useNavigate();

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
            <Item onClick={()=>navigate('/register')}>REGISTER</Item>
            <Item onClick={()=>navigate('/login')}>SIGN IN</Item>
            <Item>
              <Link to="/cart">
                <CustomIconButton aria-label="cart">
                  <Badge badgeContent={quantity} color="secondary">
                    <ShoppingCartOutlinedIcon />
                  </Badge>
                </CustomIconButton>
              </Link>
            </Item>
          </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar

const Container = styled.div`
    height: 60px;
    ${mobile({ height: "60px" })};
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  ${mobile({ padding: "10px 0", alignItems: "center" })};
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  ${mobile({ display: "none" })};
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
  ${mobile({ flex: 0, marginRight: "10px", paddingLeft: "3px" })};
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "24px" })};
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  gap: 25px;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ gap: "8px", justifyContent: "center", fontSize: "14px", paddingRight: "8px" })};
`;

const Item = styled.div`
  &:hover{
    cursor: pointer;
  }
`;

const CustomIconButton = styled(IconButton)`
  ${mobile({ padding: "0px !important" })};
`;


