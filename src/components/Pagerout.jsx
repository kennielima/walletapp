import React from 'react';
import Wallet from '../wallet/Wallet';
import Midsection from './Midsection';
import { Routes, Route, useLocation } from 'react-router-dom';
import ErrorModal from '../wallet/ErrorModal';

function Pagerout() {
    const location=useLocation();
    return (
        <Routes Location={location} key={location.pathname}>
            <Route path="/" element={<Midsection />} />
            <Route path="/home" element={<Midsection />} />
            <Route path="/wallet" element={<Wallet />} />
            <Route path="/err" element={<ErrorModal />} />
        </Routes>
    )
}

export default Pagerout;