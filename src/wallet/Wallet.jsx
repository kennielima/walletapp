import React, { useState } from 'react';
import styled from 'styled-components';
import a1 from '../images/a1.png';
import a2 from '../images/a2.png';
import a3 from '../images/a3.png';
import a4 from '../images/a4.jpeg';
import a5 from '../images/a5.jpeg';
import a6 from '../images/a6.jpeg';
import a7 from '../images/a7.jpeg';
import a8 from '../images/a8.jpeg';
import a9 from '../images/a9.jpeg';
import a10 from '../images/a10.jpeg';
import a11 from '../images/a11.jpeg';
import a12 from '../images/a12.jpeg';
import w1 from '../images/w1.jpg';
import w2 from '../images/w2.jpg';
import w3 from '../images/w3.jpeg';
import w4 from '../images/w4.jpg';
import w5 from '../images/w5.jpg';
import w6 from '../images/w6.jpeg';
import w7 from '../images/w7.jpg';
import w8 from '../images/w8.jpeg';
import w9 from '../images/w9.jpg';
import w10 from '../images/w10.jpeg';
import w11 from '../images/w11.jpg';
import w12 from '../images/w12.jpg';
import ModalContent from './ModalContent';
import Header from '../components/Header';
import Image from '../components/Image';

const names2 = [
    {
        logo: <img src={w1} alt="p1" />,
        para: '1inch Exchange',
        span: 'APP'
    }, {
        logo: <img src={w2} alt="w2" />,
        para: '2Key',
        span: 'APP'
    }, {
        logo: <img src={w3} alt="w3" />,
        para: '3Box',
        span: 'APP'
    }, {
        logo: <img src={w4} alt="w4" />,
        para: '88Mph',
        span: 'APP'
    }, {
        logo: <img src={w5} alt="w5" />,
        para: 'Aave',
        span: 'APP'
    }, {
        logo: <img src={w6} alt="w6" />,
        para: 'Adex Network',
        span: 'APP'
    }, {
        logo: <img src={w7} alt="w7" />,
        para: 'Affogato',
        span: 'APP'
    }, {
        logo: <img src={w8} alt="w8" />,
        para: 'Aka3 Email Alias',
        span: 'APP'
    }, {
        logo: <img src={w9} alt="w9" />,
        para: 'Alkemi',
        span: 'APP'
    }, {
        logo: <img src={w10} alt="w10" />,
        para: 'Ankr',
        span: 'APP'
    }, {
        logo: <img src={w11} alt="w11" />,
        para: 'Arbitrum',
        span: 'APP'
    }, {
        logo: <img src={w12} alt="w12" />,
        para: 'Astrotools.io',
        span: 'APP'
    },
];

const names = [
    {
        logo: <img src={a1} alt="p1" />,
        para: 'Rainbow',
        span: 'WALLET'
    }, {
        logo: <img src={a2} alt="w2" />,
        para: 'Walletconnect',
        span: 'WALLET'
    }, {
        logo: <img src={a3} alt="w3" />,
        para: 'Trust Wallet',
        span: 'WALLET'
    }, {
        logo: <img src={a4} alt="w4" />,
        para: 'Argent',
        span: 'WALLET'
    }, {
        logo: <img src={a5} alt="w5" />,
        para: 'MetaMask',
        span: 'WALLET'
    }, {
        logo: <img src={a6} alt="w6" />,
        para: 'Gnosis Safe MultiSig Wallet',
        span: 'WALLET'
    }, {
        logo: <img src={a7} alt="w7" />,
        para: 'Pillar',
        span: 'WALLET'
    }, {
        logo: <img src={a8} alt="w8" />,
        para: 'imToken',
        span: 'WALLET'
    }, {
        logo: <img src={a9} alt="w9" />,
        para: 'Onto',
        span: 'WALLET'
    }, {
        logo: <img src={a10} alt="w10" />,
        para: 'MathWallet',
        span: 'WALLET'
    }, {
        logo: <img src={a11} alt="w11" />,
        para: 'BitPay',
        span: 'WALLET'
    }, {
        logo: <img src={a12} alt="w12" />,
        para: 'Ledger Live',
        span: 'WALLET'
    },
];

function Wallet() {
    const [active, setActive] = useState('wallet');
    const [clicked, setClicked] = useState(false);
    const [item, setItem] = useState(null);
    // console.log({item})

    const showHandler = (item) => {
        setClicked(true);
        setItem(item);
        console.log(item);
    }
    const hideHandler = () => {
        setClicked(false);
    }

    return (
        <div>
            {clicked && (<div>
                {/* <Header /> */}
            <ModalContent
                onClose={hideHandler}
                activeName={active}
                item={item}
            />
            <Image/>
            </div>)}
            <Head>
                <h1>Choose your wallet</h1>
                <span className={active === "wallet" ? "activ" : ''} onClick={() => (setActive('wallet'))}>Wallets</span>
                <span className={active === "apps" ? "activ" : ''} onClick={() => (setActive('apps'))}>Apps</span>
            </Head>
            {active === 'wallet' && <Main>
                {names.map((item) => (
                    <Card onClick={()=>{showHandler(item)}} className="wallet" key={Math.random()}>
                        {item.logo}
                        <p>{item.para}</p>
                        <span>{item.span}</span>
                    </Card>
                ))}
            </Main>}
            {active === 'apps' && <Main>
                {names2.map((item) => (
                    <Card onClick={()=>showHandler(item)} className="apps" key={Math.random()}>
                        {item.logo}
                        <p>{item.para}</p>
                        <span>{item.span}</span>
                    </Card>
                ))}
            </Main>}
        </div>
    )
}
const Head = styled.div`
    margin: 1rem 4rem;
    margin-bottom: 10rem;
    h1 {
    margin: 1rem 0 4rem 0;
    font-weight: 700;
    font-size: 3.77rem;
    color: #1D4ED8;
    }
    span {
    margin: 4.5rem 4rem 4rem 3.6rem;
    font-size: 1.5rem;
    font-weight: 700;
    }
    &:hover {
        cursor: pointer;
    }
    .activ {
        text-decoration: underline solid black 0.3rem;
        text-underline-offset: 1rem;
        cursor: pointer;
        border: 2px;
    }
    `;
const Main = styled.div`
    display: grid;
    grid-template-columns: auto auto auto auto;
    grid-gap: 4rem;
    grid-row-gap: 8rem;
    margin: 7rem;
`;

const Card = styled.div`
    display: grid;
    grid-gap: 0;
    height: 20rem;
    width: 12rem;
    border-radius: 5px;
    box-shadow: 0px 0px 3px 4px #a2a1a113;
    align-items: center;
    padding: 3.5rem 1.8rem 3rem 1.8rem;
    cursor: pointer;
    img {
        height:8rem;
        width: 8rem;
        margin-left: 2rem;
        border-radius: 10rem;
        margin-bottom: 5rem;
        pointer-events: none;
    }
    p {
        color: rgba(59,130,246);
        font-size: 1.52rem;
        font-weight: 700; 
        pointer-events: none;
    }
    span{
        color: #9ca3af;
        font-size: 1.1rem;
        font-weight: 500;     
        pointer-events: none;
    }
    &:hover img {
        box-shadow: 0px 8px 9px 1px #a2a1a14b;
    }
    &:hover p {
        color: rgb(14, 78, 181);
    }
`;
export default Wallet;











// import React, {useState} from 'react';
// import styled from 'styled-components';
// import a1 from '../images/a1.png';
// import a2 from '../images/a2.png';
// import a3 from '../images/a3.png';
// import a4 from '../images/a4.jpeg';
// import a5 from '../images/a5.jpeg';
// import a6 from '../images/a6.jpeg';
// import a7 from '../images/a7.jpeg';
// import a8 from '../images/a8.jpeg';
// import a9 from '../images/a9.jpeg';
// import a10 from '../images/a10.jpeg';
// import a11 from '../images/a11.jpeg';
// import a12 from '../images/a12.jpeg';
// import w1 from '../images/w1.jpg';
// import w2 from '../images/w2.jpg';
// import w3 from '../images/w3.jpeg';
// import w4 from '../images/w4.jpg';
// import w5 from '../images/w5.jpg';
// import w6 from '../images/w6.jpeg';
// import w7 from '../images/w7.jpg';
// import w8 from '../images/w8.jpeg';
// import w9 from '../images/w9.jpg';
// import w10 from '../images/w10.jpeg';
// import w11 from '../images/w11.jpg';
// import w12 from '../images/w12.jpg';
// import ModalContent from './ModalContent';

// const names2 = [
//     {
//         logo: w1,
//         para: '1inch Exchange',
//         span: 'APP'
//     }, {
//         logo: w2,
//         para: '2Key',
//         span: 'APP'
//     }, {
//         logo: w3,
//         para: '3Box',
//         span: 'APP'
//     }, {
//         logo: w4,
//         para: '88Mph',
//         span: 'APP'
//     }, {
//         logo: w5,
//         para: 'Aave',
//         span: 'APP'
//     }, {
//         logo: w6,
//         para: 'Adex Network',
//         span: 'APP'
//     }, {
//         logo: w7,
//         para: 'Affogato',
//         span: 'APP'
//     }, {
//         logo: w8,
//         para: 'Aka3 Email Alias',
//         span: 'APP'
//     }, {
//         logo: w9,
//         para: 'Alkemi',
//         span: 'APP'
//     }, {
//         logo: w10,
//         para: 'Ankr',
//         span: 'APP'
//     }, {
//         logo: w11,
//         para: 'Arbitrum',
//         span: 'APP'
//     }, {
//         logo: w12,
//         para: 'Astrotools.io',
//         span: 'APP'
//     },
// ];

// const names = [
//     {
//         logo: a1,
//         para: 'Rainbow',
//         span: 'WALLET'
//     }, {
//         logo:a2,
//         para: 'Walletconnect',
//         span: 'WALLET'
//     }, {
//         logo: a3,
//         para: 'Trust Wallet',
//         span: 'WALLET'
//     }, {
//         logo: a4,
//         para: 'Argent',
//         span: 'WALLET'
//     }, {
//         logo: a5,
//         para: 'MetaMask',
//         span: 'WALLET'
//     }, {
//         logo: a6,
//         para: 'Gnosis Safe MultiSig Wallet',
//         span: 'WALLET'
//     }, {
//         logo: a7,
//         para: 'Pillar',
//         span: 'WALLET'
//     }, {
//         logo: a8,
//         para: 'imToken',
//         span: 'WALLET'
//     }, {
//         logo: a9,
//         para: 'Onto',
//         span: 'WALLET'
//     }, {
//         logo: a10,
//         para: 'MathWallet',
//         span: 'WALLET'
//     }, {
//         logo: a11,
//         para: 'BitPay',
//         span: 'WALLET'
//     }, {
//         logo: a12,
//         para: 'Ledger Live',
//         span: 'WALLET'
//     },
// ];

// function Wallet() {
//     const [active, setActive] = useState('wallet');
//     const [clicked, setClicked] = useState(false);
//     const [item, setItem] = useState(null);


//     const showHandler = (item) => {
//         setClicked(true);
//         console.log(item)
//         setItem(item);
//     }
//     const hideHandler = () => {
//         setClicked(false);
//     }

//     return (
//         <div>
//             {clicked && <ModalContent 
//             onClose={hideHandler}
//             activeName={active}
//             item={item}
//             />}
//             <Head>
//                 <h1>Choose your wallet</h1>
//                 <span onClick={() => (setActive('wallet'))}>Wallets</span>
//                 <span onClick={() => (setActive('apps'))}>Apps</span>
//             </Head>
//             {active === 'wallet' && <Main>
//                 {names.map((item) => (
//                     <Card onClick={() => showHandler(item)} className="wallet" key={Math.random()}>
//                         <img src={item.logo} alt="p1" />
//                         <p>{item.para}</p>
//                         <span>{item.span}</span>
//                     </Card>
//                 ))}
//             </Main>}
//             {active === 'apps' && <Main>
//                 {names2.map((item) => (
//                     <Card onClick={() => showHandler(item)} className="apps" key={Math.random()}>
//                         <img src={item.logo} alt="p1" />
//                         <p>{item.para}</p>
//                         <span>{item.span}</span>
//                     </Card>
//                 ))}
//             </Main>}
//         </div>
//     )
// }
// const Head = styled.div`
//     margin: 1rem 4rem;
//     margin-bottom: 10rem;
//     h1 {
//     margin: 1rem 0 4rem 0;
//     font-weight: 700;
//     font-size: 3.77rem;
//     color: #1D4ED8;
//     }
//     span {
//     margin: 4.5rem 4rem 4rem 3.6rem;
//     font-size: 1.5rem;
//     font-weight: 700;
//     }
//     span:hover {
//         text-decoration: underline solid black 0.3rem;
//         text-underline-offset: 1rem;
//         cursor: pointer;
//         border: 2px;
//     }
//     `;
// const Main = styled.div`
//     display: grid;
//     grid-template-columns: auto auto auto auto;
//     grid-gap: 4rem;
//     grid-row-gap: 8rem;
//     margin: 7rem;
// `;

// const Card = styled.div`
//     display: grid;
//     grid-gap: 0;
//     height: 20rem;
//     width: 12rem;
//     border-radius: 5px;
//     box-shadow: 0px 0px 3px 4px #a2a1a113;
//     align-items: center;
//     padding: 3.5rem 1.8rem 3rem 1.8rem;
//     cursor: pointer;
//     img {
//         height:8rem;
//         width: 8rem;
//         margin-left: 2rem;
//         border-radius: 10rem;
//         margin-bottom: 5rem;
//         pointer-events: none;
//     }
//     p {
//         color: rgba(59,130,246);
//         font-size: 1.52rem;
//         font-weight: 700; 
//         pointer-events: none;
//     }
//     span{
//         color: #9ca3af;
//         font-size: 1.1rem;
//         font-weight: 500;     
//         pointer-events: none;
//     }
//     &:hover img {
//         box-shadow: 0px 8px 9px 1px #a2a1a14b;
//     }
//     &:hover p {
//         color: rgb(14, 78, 181);
//     }
// `;
// export default Wallet;