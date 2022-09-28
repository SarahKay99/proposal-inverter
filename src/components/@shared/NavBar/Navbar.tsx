/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useNavigate } from 'react-router-dom';
import { useAccount } from 'wagmi'

import { useConnectorPopup } from "../../../@context/connector";
import Button from '../Button/Button';
import ConnectWallet from "../ConnectWallet/ConnectWallet";
import WalletOptions from "../WalletOptions/WalletOptions";
import { ClaimAmount, NavbarWrapper, Seperator } from './Navbar.style';

function Navbar() {

    const { isConnected } = useAccount();
    const { toggleWagmiPopup } = useConnectorPopup(); 
    const navigate = useNavigate();

    const claim = () => {
        console.log("Claimed tokens.");
    }

    return <><NavbarWrapper>
        <div className="leftSide">
            LOGO
            <a onClick={(e) => {navigate('/', {replace: true})}}>Home</a>
            <a onClick={(e) => {navigate('/create', {replace: true})}}>Create</a>
            <a>Discover</a>
            <a onClick={(e) => {
                if (!isConnected) toggleWagmiPopup(e)
            }}>My Account</a>
        </div>

        <div className="rightSide">
            {isConnected && (
                <div className="firstRight">
                    <Button 
                        text="Claim" 
                        textColor="white"
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
            )}

            {/* WHEN YOU GET BACK 
                - Put the MyWallet popup in the right place and make sure the button doesnt disappear.
                - Finish the MyWallet popup aesthetically
                - Display errors properly on WalletConnectPopup.
                - Create Blog
                - Finish the Home Page appearence.
            */}

            <ConnectWallet 
                connectedTo="ethereum"
            />
        </div>
    </NavbarWrapper>
    </>
}

export default Navbar;