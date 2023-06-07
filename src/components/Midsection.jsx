import React from 'react'
import Picimg from '../images/Picimg.jpeg';
import styled from 'styled-components';
import Card from './Card';

function Midsection() {
  return (
    <Main>
      <Ddiv>
        <h1>Decentralized <br /><span>Platform Wallet</span></h1>
        <img src={Picimg} alt='img' />
      </Ddiv>
      <Descript>
        <h1>Our Services</h1>
        <p>Walletnode is a decentralized protocol. dConnect create an innovative open-source software ecosystem that is both secure and resilient. And it allows developers to create new online tools, many of which have the interest of global business markets. Validation of wallet will be completed below as follows</p>
      </Descript>
      <Card />
    </Main>
  )
}
const Main = styled.div`
@media(max-width:30rem){
  width: auto;
}
`;
const Ddiv = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin: 3.5rem 0rem 3rem 14rem;

@media(max-width:30rem){
  margin: 5.4rem 0 2.3rem 0;
flex-direction: column;
img {
  width: 100%;
}
}

h1 {
font-weight: 800;
font-size: 3.8rem;
text-align: center;
line-height: 3.6rem;

@media(max-width:30rem){
  font-size: 2.8rem;
font-weight: 800;
line-height: 3.2rem;
margin-bottom: -0.5rem;

span {
  font-size: 2.2rem;
}
}
}
span {
  color: rgb(29,64,175);
font-weight: 700;
font-size: 3rem;
}
`;

const Descript = styled.div`
margin: 3rem 7rem;
text-align: center;

@media(max-width:30rem){
margin: 1.43rem 1.43rem 12rem 1.43rem;
line-height: 2.1rem;
}
h1 {
font-weight: 800;
font-size: 3.8rem;
color: rgb(29,64,175);
@media(max-width:30rem){
font-size: 3rem;
font-weight: 800;
padding-top: 1.5rem;
}
}
p {
font-size: 1.5rem;
font-weight: 700;
}
`;
export default Midsection

