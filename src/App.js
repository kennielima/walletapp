import React from "react";
import Header from "./components/Header";
import Pagerout from "./components/Pagerout";
import { BrowserRouter } from "react-router-dom";
import Image from "./components/Image";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Image />
        <Pagerout />
      </BrowserRouter>
    </div>
  );
}


export default App;