import React from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';

function Modal(props) {
    const Backdrop = () => {
        return <Bd onClick={props.onClose}/>
    }
    const Overlay = (props) => {
        return <Ol>{props.children}</Ol>
    }
    const portal = document.getElementById('overlays');

  return (
    <div>
        {createPortal(<Backdrop />, portal)}
        {createPortal(<Overlay >{props.children}</Overlay>, portal)}
    </div>
  )
}
const Bd = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 20;
    background-color: rgba(240, 240, 240, 0.94);
`;

const Ol = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: auto;
    width: 78%;
    background-color: white;
    padding: 0rem 0.3rem 0.8rem 0.3rem;
    border-radius: 7px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.07);
    z-index: 30;
    animation: slide-down 300ms ease-out forwards;
    @media(max-width:30rem){
      width: 95%;
    }
  ;`
  
export default Modal;