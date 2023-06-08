import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
function ErrorModal(props) {
  return (
    <Error>
        <p>error syncronising</p>
        <div>Having issues? Chat with support Click on the Chat-icon at the down page</div>
        <NavLink to={'/wallet'}>
        <button>Back</button>
        </NavLink>
    </Error>
  )
}
 const Error = styled.div`
 background-color: black;
 width: 22%;
 position: fixed;
 top: 50%;
 left: 50%;
 transform: translate(-50%, -50%);
 display: grid;
 justify-content: center;
 text-align: center;
 padding: 2rem;
 @media(max-width: 30rem){
position: absolute;
width: 60%;
 }
 p {
    color: #f77171;
    font-size: 1.2rem;
 }
 div {
    color: white;
    font-weight: 700;
    font-size: 1.5rem;
 }
 button {
    margin-top: 1.5rem;
    width: 4rem;
    padding: 0.8rem 4rem 0.8rem 1rem;
    font-size: 1.3rem;
    font-weight: 600;
 text-align: center;
 cursor: pointer;
 background-color: #1d40af;
 color: white;
 border: none;
 border-radius: 0.5rem;
 }
 `;
export default ErrorModal;