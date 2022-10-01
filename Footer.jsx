import { Facebook, Instagram, MailOutlineRounded, Phone, Pinterest, Room, Twitter } from "@material-ui/icons";
import styled from "styled-components"

const Container = styled.div`
display: flex;
background-color: #EBD9F9;
`;
const Left = styled.div`
flex: 1;
display:flex;
flex-direction: column;
padding: 20px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
margin: 20px 0px;
`;

const SocialContainer = styled.div`
display: flex;
`;

const SocialIcon = styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
color: white;
background-color: #${(props)=>props.color};
display: flex;
align-items: center;
justify-content: center;
margin-right: 20px;
`;


const Center = styled.div`
flex: 1;
padding: 20px;
`;
const Title= styled.h3`
margin-bottom: 30px;
    
`;
const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style:none;
    display: flex;
    flex-wrap:wrap ;
  
`;
const ListItem = styled.li`
width: 50%  ;
margin-bottom : 10;     
`;
const Right = styled.div`
flex: 1;
padding: 20px;
`; 
const ContactItem = styled.div`
margin-bottom: 20px;
display: flex;
align-items: center;

`;
const Payment = styled.img`
width: 50%;
    
`;

const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>DKVR.</Logo>
        <Desc>Let's get to know each other better
            Here at DKVR,fashion isn't just what we know. its what we love. Exciting, feminine, versatile - but affordable too - our huge range of styles and daliy new arrivals means your wardrobe can be as good at multitasking as you are. If you're looking for the perfect shopping buddy.we're  it!
        </Desc>
        <SocialContainer>
        <SocialIcon color="385999">
                <Facebook/>

            </SocialIcon >
           
            <SocialIcon color="E4405F">
                <Instagram/>
            </SocialIcon>

            <SocialIcon color="55ACEE">
                <Twitter/>
            </SocialIcon>

            <SocialIcon color="E60023">
                <Pinterest/>
            </SocialIcon>

        </SocialContainer>
        </Left>
        <Center> 
            <Title>Useful Links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Women Fashion</ListItem>
                <ListItem>Man Fashion</ListItem>
                <ListItem>Accessories </ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>terms</ListItem>
            </List>
        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem><Room style={{marginRight:"10px"}}/>
                delhi
            </ContactItem>
            <ContactItem>
                <Phone/> 4564576867     
            </ContactItem>
            <ContactItem>
                <MailOutlineRounded style={{marginRight:"10px"}}/> shido8022@gmail.com
            </ContactItem>
            <Payment src="https://payg.in/assets/img/upi-payments.png"></Payment>
        </Right>
    </Container>
  )
}

export default Footer