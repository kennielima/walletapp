import React from 'react';
import logoo from '../images/logoo.png';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <Head>
            <Logo to={'/home'}>
                    <img src={logoo} alt='logo' />
                    <span>Walletnode</span>
            </Logo>
            <Nav>
                <Link to={'/home'}>
                    <span>Home</span>
                </Link>
                <Link to={'/wallet'}>
                    <span>Connect Dconnect</span>
                </Link>
                <Link to={'/home'}>
                    <span>Contact us</span>
                </Link>
                <Link to={'/wallet'}>
                    <span>FAQ</span>
                </Link>
            </Nav>
        </Head>
    )
}

const Head = styled.div`
display: flex;
justify-content: space-between;
gap: 30rem;
box-shadow: 5px 4px 15px 4px #88888820;
height: 79px;
padding: 0 0.5rem;
`;

const Logo = styled(NavLink)`
text-decoration: none;
margin: 1rem 1rem;
display: flex;
width: 10%;
align-items: center; 
color: #1D4ED8;

span{
    font-size: 25px;
font-weight: 500;
}
img {
    height: 2.5rem;
    width: 2.5rem;
padding-bottom: 1rem;
}
`;

const Nav = styled.div`
margin: 1rem 7rem;
display: flex;
justify-content: space-between;
width: 90%;
align-items: center; 
`;

const Link = styled(NavLink)`
text-decoration: none;
color: #1E40AF;
font-size: 20px;
font-weight: 700;
`;
export default Header;