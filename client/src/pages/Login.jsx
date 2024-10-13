import React, { useState } from 'react';
import styled from "styled-components";
import { mobile } from '../responsive';
import { login } from '../redux/apiCalls';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isFetching, error } = useSelector((state)=> state.user);
  const handleLogin = async (e) =>{
    e.preventDefault();
    login(dispatch, {
      username, 
      password
    });
  }
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input placeholder="Username" onChange={(e)=>setUsername(e.target.value)}/>
          <Input placeholder="Password" type="password" onChange={(e)=>setPassword(e.target.value)}/>
          {/* Disable the button if the user credentials are getting fetched. */}
          <Button onClick={(e)=>handleLogin(e)} disabled={isFetching}>LOGIN</Button>
          {error && <Error>Something went wrong...</Error>}
          <Link onClick={()=> navigate('/register')}>Create a new account</Link>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Login

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  padding: 20px;
  width: 25%;
  background-color: white;
  ${mobile({ width: "80%" })};
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
    flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
  outline: none;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 10px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;

  &:disabled{
    cursor: not-allowed;
  }
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 13px;
  text-decoration: underline;
  cursor: pointer;
`;

const Error = styled.span`
  color: red;
`;