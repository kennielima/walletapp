import React from "react";
import Header from "./components/Header";
import Image from "./components/Image";
import Pagerout from "./components/Pagerout";
import { BrowserRouter } from "react-router-dom";

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