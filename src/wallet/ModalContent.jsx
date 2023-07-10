import React,{useState} from 'react';
import Modal from './Modal';
import styled from 'styled-components';
import a2s from '../images/a2s.png';
import x from '../images/x.png';
import WalletForm from './WalletForm';

function ModalContent({item,activeName,onClose}) {
    const [info, setInfo] = useState("synchro");

    return (
        <Modal onClose={onClose}>
            {info === "synchro" && 
            <div>
                <Fdiv>
                    <img src={a2s} alt={a2s} />
                    <img src={x} className='img2' onClick={onClose} />
                </Fdiv>
                <Sdiv>
                    <span>error Synchronizing</span>
                    <Tdiv>
                        <span>
                            {activeName === 'wallet' &&
                            (!(item.para).includes('Wallet'|| 'wallet')) ? 
                            item.para + ' wallet' : item.para}
                        </span>
                            <button onClick={()=>setInfo("form")}>Connect Manually</button>
                        {item.logo}
                    </Tdiv>
                </Sdiv>
            </div>
                }
                {info === "form" && <WalletForm 
                onClose={onClose}
                item={item}
                activeName={activeName}
                />}
        </Modal>
    )
};

const Fdiv = styled.div`
display: flex;
justify-content: space-between;
padding: 1rem 1rem 0.7rem 1rem;

// img {
// font-weight: 600;
// font-size: 1.8rem;
// }
.img2 {
height: 3.7rem;
    cursor: pointer;
    color: RGB(79 79 79);
}
`;

const Sdiv = styled.div`
display: grid;
border: 0.15rem solid #ef4444;
border-radius: 0.5rem;
padding: 1.5rem 0.5rem;
@media(max-width:30rem){
 padding: 1.7rem 1rem;
}
span {
color: #dc2d2c;
font-size: 0.85rem;
font-weight: 500;
@media(max-width:30rem){
    font-size: 1.1rem;
    padding-left: 0.5rem;
}
}
`;
const Tdiv = styled.div`
display: flex;
justify-content: space-between;
padding: 0 0.5rem 0 1.4rem;
align-items: center;

img {
    height: 3rem;
    @media(max-width:30rem){
        padding-bottom: 0.7rem;
    height: 3.5rem;
    }
}
span {
    color: black;
    font-weight:700;
    font-size: 1rem;
    @media(max-width:30rem){
        font-size: 1.2rem;
        padding-left: 0;
    }
}
button {
 background-color: #1f2937;
 color: white;
 border-radius: 0.9rem;
 border: none;
 padding: 0.8rem;
 position: absolute;
 left: 54.5rem;
 font-size: 1.2rem;
cursor: pointer;
@media(max-width:30rem){
    left: 13rem;
    bottom: 3.5rem;
 font-size: 1rem;
 padding: 1rem;
 font-weight: bold;
}
}
 `;
export default ModalContent;







// import React, { useState } from 'react';
// import Modal from './Modal';
// import styled from 'styled-components';
// import a2s from '../images/a2s.png';


// function ModalContent({item, activeName, onClose}) {
//     console.log({item})

//     return (
//         <Modal onClose={onClose} >
//             <div>
//                 <img src={a2s} alt={a2s} />
//                 <Ddiv>
//                     <Span>
//                         {activeName === "wallet" && item.name}
//                         {activeName === "apps" && item.name}
//                     </Span>
//                     <div>
//                     <img src={item.logo} alt='' width={100} height={100} />
//                   </div>
//                     <Button>Connect Manually</Button>
                   
//                 </Ddiv>
//             </div>
//         </Modal>
//     )
// };

// const Button = styled.button`
//  background-color: #1f2937;
//  color: white;
//  border-radius: 0.9rem;
//  border: none;
//  padding: 0.8rem;
//  font-size: 1.2rem;
//  `;
// const Span = styled.div`
// color: black;
// font-weight:600;
// `;
// const Ddiv = styled.div`
// display: flex;
// justify-content: space-around;
// `;
// export default ModalContent;