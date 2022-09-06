import { useConnectorPopup } from "../../../@context/connector";
import React, { useEffect, useState } from "react";
import { useAccount } from "wagmi";
import { accountTruncate } from "../../../@utils/web3";
import { WalletOptionsWrapper } from "./WalletOptions.style";
import MyWallet from "../MyWallet";

function WalletOptions() {
    const { address } = useAccount();
    const { toggleWalletDropdown, showingWalletDropdown } = useConnectorPopup();

    useEffect(() => {
        console.log(showingWalletDropdown)
    }, [showingWalletDropdown])

    return <WalletOptionsWrapper>
        <button className="walletDropdown" onClick={(e) => {
            e.preventDefault();
            toggleWalletDropdown(e);
        }}>
            {accountTruncate(address)}
            {showingWalletDropdown ? 
                <img className="image" src="upward-arrow.png" /> :
                <img className="image" src="downward-arrow.png"/>
            }
        </button>

        {showingWalletDropdown && 
            <MyWallet />
        }
    </WalletOptionsWrapper>
}

export default WalletOptions;