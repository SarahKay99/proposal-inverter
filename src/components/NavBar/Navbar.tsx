import React from "react";
import ConnectWallet from "../ConnectWallet/ConnectWallet";
import { NavbarWrapper } from './Navbar.style';

interface NavbarProps {
    
}

function Navbar({}: NavbarProps) {
    return <NavbarWrapper>
        <div className="leftSide">
            LOGO
            <a>Home</a>
            <a>Create</a>
            <a>Fund</a>
            <a>My Activities</a>
        </div>

        <div className="rightSide">              
            <ConnectWallet />
        </div>
    </NavbarWrapper>
}

export default Navbar;