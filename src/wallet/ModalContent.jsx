import React, { useState } from 'react';
import Modal from './Modal';
import styled from 'styled-components';
import a2s from '../images/a2s.png';


function ModalContent({item, activeName, onClose}) {
    console.log({item})

    return (
        <Modal onClose={onClose} >
            <div>
                <img src={a2s} alt={a2s} />
                <Ddiv>
                    <Span>
                        {activeName === "wallet" && item.name}
                        {activeName === "apps" && item.name}
                    </Span>
                    <div>
                    <img src={item.logo} alt='' width={100} height={100} />
                  </div>
                    <Button>Connect Manually</Button>
                   
                </Ddiv>
            </div>
        </Modal>
    )
};

const Button = styled.button`
 background-color: #1f2937;
 color: white;
 border-radius: 0.9rem;
 border: none;
 padding: 0.8rem;
 font-size: 1.2rem;
 `;
const Span = styled.div`
color: black;
font-weight:600;
`;
const Ddiv = styled.div`
display: flex;
justify-content: space-around;
`;
export default ModalContent;