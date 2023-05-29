import React from 'react';
import Wallet from '../wallet/Wallet';
import Midsection from './Midsection';
import WalletForm from '../wallet/WalletForm';
import { Routes, Route, useLocation } from 'react-router-dom';

function Pagerout() {
    const location=useLocation();
    return (
        <Routes Location={location} key={location.pathname}>
            <Route path="/" element={<Midsection />} />
            <Route path="/home" element={<Midsection />} />
            <Route path="/wallet" element={<Wallet />} />
            {/* <Route path="/wallet/walletform" element={<WalletForm />} /> */}

        </Routes>
    )
}

export default Pagerout;