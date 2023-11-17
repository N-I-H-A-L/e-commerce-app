import React from 'react';
import styled from "styled-components";

import PhoneIcon from '@mui/icons-material/Phone';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import TwitterIcon from '@mui/icons-material/Twitter';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>CARTIFY~</Logo>
        <Desc>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don’t look even slightly believable.
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <FacebookIcon />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <InstagramIcon />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <TwitterIcon />
          </SocialIcon>
          <SocialIcon color="E60023">
            <PinterestIcon />
          </SocialIcon>
        </SocialContainer>
      </Left>

      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>

      <Right>
        <Contact>Contact</Contact>
        <ContactItem>
          <LocationOnIcon/> 622 Dixie Path, South Tobinchester 98336
        </ContactItem>
        <ContactItem>
          <PhoneIcon/> +1 234 56 78
        </ContactItem>
        <ContactItem>
          <MailOutlinedIcon/> contact@nihal
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  )
}

export default Footer

const Container = styled.div`
  display: flex;
  padding-bottom: 20px;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 20px;
`;

const Logo = styled.h1`
  
`;

const Desc = styled.div`

`;

const SocialContainer = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 10px;
`;

const SocialIcon = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  background-color: #${props=> props.color};
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover{
    cursor: pointer;
  }
`;

const Center = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 20px;
`;

const Contact = styled.div`
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 15px;
`;

const Title = styled.div`
  font-weight: bold;
  font-size: 18px;
`;

const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 15px;
  height: 25vh;
`;

const ListItem = styled.div`

`;

const Right = styled.div`
  display: flex;
  flex: 1;
  padding: 20px;
  gap: 15px;
  flex-direction: column;
  justify-content: center;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const Payment = styled.img`
  height: 30px;
  width: 300px;
  object-fit: cover;
`;