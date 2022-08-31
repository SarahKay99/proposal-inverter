import React, { useState } from "react";
import { accountTruncate } from "../../../@utils/web3";
import { WalletOptionsWrapper } from "./WalletOptions.style";

interface WalletOptionsProps {

}

function WalletOptions({}: WalletOptionsProps) {
    const [dropdownSelected, setDropdownSelected] = useState(false);

    const toggleDropdown = (e: any) => {
        e.preventDefault();
        setDropdownSelected(!dropdownSelected);
    }

    return <WalletOptionsWrapper>
        <button className="walletDropdown" onClick={(e) => toggleDropdown(e)}>
            {accountTruncate("0xc257274276a4e539741ca11b590b9447b26a8051")}
            {dropdownSelected ? <img className="image" src="upward-arrow.png" /> : <img className="image" src="downward-arrow.png"/>}
        </button>
    </WalletOptionsWrapper>
}

export default WalletOptions;