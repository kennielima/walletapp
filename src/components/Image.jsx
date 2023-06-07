import React from 'react';
import styled from "styled-components";

function Image() {
  return (
    <IMG>
   <span> ...</span>
<svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><path d="M87.49 380c1.19-4.38-1.44-10.47-3.95-14.86a44.86 44.86 0 00-2.54-3.8 199.81 199.81 0 01-33-110C47.65 139.09 140.73 48 255.83 48 356.21 48 440 117.54 459.58 209.85a199 199 0 014.42 41.64c0 112.41-89.49 204.93-204.59 204.93-18.3 0-43-4.6-56.47-8.37s-26.92-8.77-30.39-10.11a31.09 31.09 0 00-11.12-2.07 30.71 30.71 0 00-12.09 2.43l-67.83 24.48a16 16 0 01-4.67 1.22 9.6 9.6 0 01-9.57-9.74 15.85 15.85 0 01.6-3.29z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32"/></svg>    
</IMG>
  )
}
const IMG = styled.div`
  cursor: pointer;
  border: 0.7rem solid #5553b7;
  background-color: white;
  border-radius: 10rem;
  height: 2.5rem;
  width: 2.5rem;
  // margin: 38rem 2rem 2rem 84rem;
  box-shadow: 0px 2px 6px 1.5px #565555ca;
  position: fixed;
  bottom: 1rem;
  right: 2rem;
  z-index: 100;
  span {
    font-weight: 800;
    color: #5553b7;
    position: absolute;
    top: -8px;
    left: 6px;
    font-size: 2rem;
  }
  svg {
  height: 3.3rem;
  width: 2.9rem;
  position: absolute;
    top: -6.25px;
    left: -3.2px;
  color: #5553b7;
  transform: scaleX(-1);
  // @media(max-width:30rem){
  //       top: -4.75px;
  //   left: -2.5px;
  // }
  }
`
export default Image;