import React, { useState } from "react";
import { ConnectWalletWrapper, WalletConnectedWrapper } from './ConnectWallet.style';
import { useConnect, useAccount } from 'wagmi';
import WalletConnectPopup from "../WalletConnectPopup/WalletConnectPopup";
import { useConnectorPopup } from "../../../@context/connector";

const walletDropdownOptions = [
    "Ethereum",
    "Arbitrum",
    "Polygon",
    "Gnosis",
    "Optimism",
    "Celo",
]

interface ConnectWalletProps {
    connectedTo: string
}

function ConnectWallet({
    connectedTo
}: ConnectWalletProps) {
    const { connect, connectors, error, isLoading, pendingConnector } = useConnect();
    const { address, connector, isConnected } = useAccount();
    const { toggleWagmiPopup } = useConnectorPopup();

    const [dropdownSelected, setDropdownSelected] = useState(false);
    const [dropdownSelectedOption, setDropdownSelectedOption] = useState<string>('');
    
    const toggleDropdown = (e: any) => {
        e.preventDefault();
        setDropdownSelected(!dropdownSelected);
    }
    
    const selectOption = (e: any, option: string) => {
        e.preventDefault();
        setDropdownSelectedOption(option);
        setDropdownSelected(!dropdownSelected);
    }

    return isConnected ? (
        <WalletConnectedWrapper
            connectedTo={connectedTo}
            dropdownSelected={dropdownSelected}
        >
            <button className="walletConnectedButton" onClick={(e) => toggleDropdown(e)}>
                <img src="green-dot.png" />
                {connectedTo.charAt(0).toUpperCase() + connectedTo.slice(1).toLowerCase()}
                {dropdownSelected ? <img src="upward-arrow.png" /> : <img src="downward-arrow.png" />}
            </button>

            {walletDropdownOptions != undefined && (
                <ul>
                    {walletDropdownOptions.map((option: any) => {
                        return <li key={option} value={option}>
                            <button 
                                onClick={(e) => selectOption(e, option)
                            }><span>{option}</span></button>
                        </li>
                    })}
                </ul>
            )}
        </WalletConnectedWrapper>
    ) : (
        <ConnectWalletWrapper onClick={(e) => toggleWagmiPopup(e)}>
            Connect Wallet
        </ConnectWalletWrapper>
    )
}

export default ConnectWallet;