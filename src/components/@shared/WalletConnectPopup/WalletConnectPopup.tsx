import React, { useEffect } from "react";
import { WalletConnectPopupWrapper, WalletConnectPopupContent } from './WalletConnectPopup.style'
import { useConnect } from 'wagmi'
import { useConnectorPopup } from "../../../@context/connector";

const arr: any = [
    {id: "metaMask", img: "metamask.png"},
    {id: "coinbaseWallet", img: "coinbaseWallet.png"},
    {id: "walletConnect", img: "walletConnect.png"},
    {id: "injected", img: "injected.png"}
]

function WalletConnectPopup() {
    const { connect, connectors, error, isLoading, pendingConnector } = useConnect();
    const { showingWagmiPopup, toggleWagmiPopup } = useConnectorPopup();

    return <WalletConnectPopupWrapper 
        showing={showingWagmiPopup} 
        onClick={(e) => toggleWagmiPopup(e)}
    >
        <WalletConnectPopupContent>
            Choose your preferred wallet
            <hr />
            {connectors.map((connector) => (
                <button
                    disabled={!connector.ready}
                    key={connector.id}
                    onClick={() => connect({ connector })}
                    className="connectorButton"
                >
                    <div className="connectorButtonFlexBox">
                        <img src={arr.find((item: any) => item.id == connector.id).img} />
                        {connector.name}
                        {!connector.ready && ' (unsupported)'}
                        {isLoading &&
                            connector.id === pendingConnector?.id &&
                            ' (connecting)'
                        }
                    </div>
                </button>
            ))}

            {error &&
                <div className="errorMessage">
                    {error.message}
                </div>
            }
        </WalletConnectPopupContent>

    </WalletConnectPopupWrapper>
}

export default WalletConnectPopup;