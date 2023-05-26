import React from 'react';
import Wallet from '../wallet/Wallet';
import Midsection from './Midsection';
import { Routes, Route } from 'react-router-dom';

function Pagerout() {
    return (
        <Routes>
            <Route path="/" element={<Midsection />} />
            <Route path="/home" element={<Midsection />} />
            <Route path="/wallet" element={<Wallet />} />
        </Routes>
    )
}

export default Pagerout;