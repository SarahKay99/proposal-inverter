import React, { useState } from "react";
import ConnectWallet from "../ConnectWallet/ConnectWallet";
import { ClaimAmount, NavbarWrapper, Seperator } from './Navbar.style';
import Button from '../Button/Button';
import WalletOptions from "../WalletOptions/WalletOptions";

interface NavbarProps {
    
}

function Navbar({}: NavbarProps) {
    const claim = () => {
        console.log("Claimed tokens.");
    }

    return <NavbarWrapper>
        <div className="leftSide">
            LOGO
            <a>Home</a>
            <a>Create</a>
            <a>Fund</a>
            <a>My Activities</a>
        </div>

        <div className="rightSide">
            <>
            <div className="firstRight">
                <Button 
                    text="Claim" 
                    onClick={claim}
                    color="none" 
                    border="blueIce"
                    height={40}
                    sizeType="px"
                    hover="blueIce"
                />
                <ClaimAmount>2.67 ETH</ClaimAmount>
                <Seperator>|</Seperator>
                <WalletOptions />
            </div>
            <ConnectWallet 
                connected={true} 
                connectedTo={"ethereum"}
            />
            </>
        </div>
    </NavbarWrapper>
}

export default Navbar;