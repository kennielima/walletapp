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
        {createPortal(<Overlay>{props.children}</Overlay>, portal)}
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
    background-color: rgba(0, 0, 0, 0.75);
`;

const Ol = styled.div`
    position: fixed;
    top: 50vh;
    left: 5%;
    width: 90%;
    background-color: white;
    padding: 1rem;
    border-radius: 14px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
    z-index: 30;
    animation: slide-down 300ms ease-out forwards;
  ;`
  
export default Modal;