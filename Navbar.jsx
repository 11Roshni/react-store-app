import { Badge } from '@material-ui/core';
import {  Search,   ShoppingCartRounded } from '@material-ui/icons';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const Container =styled.div`
    height: 60px;
    background-color: #BDF2EB;
`;
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
const Left = styled.div`
flex: 1;
display : flex ;
align-items: center;
`;

const SearchContainer = styled.div`
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
    `;
const Input = styled.input` 
    border:none;
`;
const Center = styled.div`
    flex: 1;
    text-align: center ;
`;
const Logo = styled.h1`
    font-weight:bold;
`;
const Right = styled.div`
    flex: 1; 
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

const Button = styled.button`
    padding: 10px;
    font-size:20px;
    background-color: rgba(255,255,255,0.5);
    cursor: pointer;
    justify-content: space-between;
    margin-left: 25px;
`;

const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer ;
    margin-left: 25px;
`;
const Navbar = () => {
    const quantity=useSelector(state=>state.cart.quantity)
    
  return (
    <Container>
        <Wrapper>
            <Left>
                <SearchContainer>
                    <Input/>
                    <Search style={{color:"black",fontSize:20}}/>
                </SearchContainer>
            </Left>
            <Center><Logo>FASHION STORE</Logo></Center>
            <Right>
                <Button>
                    <MenuItem>REGISTER</MenuItem>
                </Button>

                <Button>
                    <MenuItem>SIGN IN</MenuItem>
                </Button>

                    <Link to="/cart">
                    <MenuItem>
                    <Badge badgeContent={quantity} color="primary">
                     <ShoppingCartRounded/>
                    </Badge>
                    </MenuItem>
                    </Link>
               
            </Right>
        </Wrapper>

    </Container>
  )
}

export default Navbar