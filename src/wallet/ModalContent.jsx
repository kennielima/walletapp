import React, { useState } from 'react';
import Modal from './Modal';
import styled from 'styled-components';
import a2s from '../images/a2s.png';


function ModalContent(props) {
    // console.log(props.wname)

    return (
        <Modal onClose={props.onClose} >
            <div>
                <img src={a2s} alt={a2s} />
                <Ddiv>
                    <Span>
                        {props.activeName === "wallet" && props.wname}
                        {props.activeName === "apps" && props.aname}
                    </Span>
                    <Button>Connect Manually</Button>
                    <div>
                        {props.activeName === "wallet" && props.wlogo}
                        {props.activeName === "apps" && props.alogo}                            </div>
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