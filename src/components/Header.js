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
                    <span className='links'>Home</span>
                </Link>
                <Link to={'/wallet'}>
                    <span className='links'>Connect Dconnect</span>
                </Link>
                <Link to={'/home'}>
                    <span className='links'>Contact us</span>
                </Link>
                <Link to={'/wallet'}>
                    <span className='links'>FAQ</span>
                </Link>
                <Link to={'/wallet'}>
                    <span className='medialink'>Connect</span>
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
position: relative;
z-index: 100;

@media(max-width:30rem){
    width: auto;
    gap: 6rem;
box-shadow: none;
height: 65px;
}
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
    @media(max-width:30rem){
font-size: 1.5rem;
// font-weight: 800;
    }
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
@media(max-width:30rem){
    margin: auto;
    padding-right: 1rem;
        }
`;

const Link = styled(NavLink)`
text-decoration: none;
color: #1E40AF;
font-size: 20px;
font-weight: 700;

.links {
    display: flex;
@media(max-width:30rem){
    display: none;
}
}
.medialink {
    display: none;
    @media(max-width:30rem){
        display: flex;
font-size: 1.8rem;
font-weight: 700;
    }
}
`;
export default Header;