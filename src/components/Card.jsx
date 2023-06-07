import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import p1 from '../images/p1.png';
import p2 from '../images/p2.png';
import p3 from '../images/p3.png';
import p7 from '../images/p7.png';
import p8 from '../images/p8.png';

const names = [
    {
        logo: <img src={p1} alt="p1" />,
        h1: 'RETIFICATION',
        para: 'Retification support warranties completely decentralized',
        button: 'RETIFICATION'
    }, {
        logo: <img src={p2} alt="p2" />,
        h1: 'VALIDATION',
        para: 'Validation completely decentralized support wallet',
        button: 'VALIDATION'
    }, {
        logo: <img src={p3} alt="p3" />,
        h1: 'RECOVERY',
        para: 'Recovery wallet TATs Dapps with Blockchain and DeFi',
        button: 'RECOVERY'
    }, {
        logo: <img src={p2} alt="p2" />,
        h1: 'MY NFTS',
        para: 'View your collection of digital works',
        button: 'VIEW'
    }, {
        logo: <img src={p1} alt="p1" />,
        h1: 'WHITELIST',
        para: 'Get a Early Spot for Minting',
        button: 'WHITELIST'
    }, {
        logo: <img src={p1} alt="p1" />,
        h1: 'PURCHASE TOKEN',
        para: 'Also, buy bitcoin, ether, and many common crypocurrencies',
        button: 'BUY'
    }, {
        logo: <img src={p7} alt="p7" />,
        h1: 'HARVEST MY STAKINGS',
        para: "When you choose to redeem, we'll return your assets to your Spot Wallet the following day",
        button: 'HARVEST'
    }, {
        logo: <img src={p8} alt="p8" />,
        h1: 'UPDATE MY PORTFOLIOS',
        para: 'Generate Real-Time Profit and Loss Reports, Your Coin Values, Reports for Taxes and More.',
        button: 'GENERATE'
    }, {
        logo: <img src={p7} alt="p7" />,
        h1: 'ADD TOKENS',
        para: 'Cryptotokens are type of cryptocurrenciesthat represents an asset or specific use and reside on their own blockchain.',
        button: 'ADD'
    }, {
        logo: <img src={p2} alt="p2" />,
        h1: 'REVIEW MY NFTS',
        para: 'NFTs are digital collectibles that can be traded like other cryptocurrencies. They confer some ownership rights to a work',
        button: 'REVIEW'
    }, {
        logo: <img src={p1} alt="p1" />,
        h1: 'STAKING POOL',
        para: 'A staking pool allows multiple stakeholders (or bagholders) to combine their computational resources as a way to increase their chances of being rewarded',
        button: 'STAKING POOL'
    }, {
        logo: <img src={p7} alt="p7" />,
        h1: 'WITHDRAWAL',
        para: 'A crypto withdrawal is a transaction that allow you to move your cryptocurrency balance off the Revolut platform to an external crypto wallet that you control such as a Ledger or a Trezor',
        button: 'WITHDRAWAL'
    }, {
        logo: <img src={p3} alt="p3" />,
        h1: 'STAKING REVIEW',
        para: 'Interaction between mobile apps and mobile browers are supported via mobile deep linking Having complete control of your staking',
        button: 'STAKING REVIEW'
    }, {
        logo: <img src={p7} alt="p7" />,
        h1: 'BRIDGE',
        para: 'enables applications built on different blockchains to communicate with and interact with each other, something which was never before possible, therefore unlocks a groundbreaking development for the blockchain space as a whole. On launch, Ethereum, BSC, Avalanche, and Polygon - four of the leading blockchains and protocols - are supported, with capabilities to add new blockchains built-in to the Alliance Bridge protocol.',
        button: 'BRIDGE'
    }
];

function Card() {
    return (
        <Main>
    {names.map((item) => (
            <Cards key={Math.random()}>
                <Link to={'/wallet'}>
                <div>{item.logo}</div>
                <p>{item.h1}</p>
                <p className='para'>{item.para}</p>
                <button>{item.button}</button>
                </Link>
            </Cards>
            ))}
        </Main>
    )
}
const Main = styled.div`
    display: grid;
    grid-template-columns: auto auto auto;
    gap: 2rem;
    margin: 10rem 5rem 0 2.5rem;
    width: 100vp;
    
@media(max-width:30rem){
    margin: 3rem;
    grid-template-columns: auto;
}
`;
const Cards = styled.div`
    display: flex;
    flex-direction: column;
    height: auto;
    width: 24rem;
    background-color: #1E40AF;
    border-radius: 5px;
    text-align: center;
    padding: 2.2rem 1.5rem 1.8rem 1.5rem;

@media(max-width:30rem){
    width: auto;
    padding: 3.2rem 0 2.6rem 0;
}
    a {
    text-decoration: none;
    color: white;
    }
    p {
    font-size: 1.6rem;
    font-weight: 700;  
    margin: 0.7rem;
    @media(max-width:30rem){
        margin: 1.1rem;
        margin-bottom: 1.5rem;
        font-size: 1.8rem;
    font-weight: 800;
    }
    }
    .para {
    font-size: 1.52rem;
    font-weight: 700; 
    @media(max-width:30rem){
        font-size: 1.4rem;
    }
    }
    button {
    text-align: center;
    border-radius: 50px;
    margin: 1rem;
    padding: 0.8rem 2.5rem;
    color: #1E40AF;
    font-weight: 500;
    font-size: 1.1rem;
    border: none;

    @media(max-width:30rem){
    margin: 0.3rem;
    font-size: 1.4rem;
    padding: auto;
    }
    }
    img {
        height: 5rem;
        width: 5rem;
    @media(max-width:30rem){
        height: 6rem;
        width: 6rem;
    }
    }
    `;
export default Card;