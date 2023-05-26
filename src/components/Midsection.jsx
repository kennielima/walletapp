import React from 'react'
import Picimg from '../images/Picimg.jpeg';
import styled from 'styled-components';
import Card from './Card';

function Midsection() {
  return (
    <div>
      <Ddiv>
        <h1>Decentralized <br /><span>Platform Wallet</span></h1>
        <img src={Picimg} alt='img' />
      </Ddiv>
      <Descript>
        <h1>Our Services</h1>
        <p>Walletnode is a decentralized protocol. dConnect create an innovative open-source software ecosystem that is both secure and resilient. And it allows developers to create new online tools, many of which have the interest of global business markets. Validation of wallet will be completed below as follows</p>
      </Descript>
      <Card />
    </div>
  )
}
const Ddiv = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin: 3.5rem 0rem 3rem 14rem;
h1 {
font-weight: 800;
font-size: 3.8rem;
text-align: center;
line-height: 3.6rem;
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
h1 {
font-weight: 800;
font-size: 3.8rem;
color: rgb(29,64,175);
}
p {
font-size: 1.5rem;
font-weight: 700;
}
`;
export default Midsection