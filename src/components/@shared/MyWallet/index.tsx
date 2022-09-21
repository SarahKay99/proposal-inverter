import React from "react"
import { useAccount, useDisconnect } from "wagmi"
import { MyWalletWrapper } from "./index.style"
import { accountTruncate } from "../../../@utils/web3";

function MyWallet() {
    const { address, connector, isConnected } = useAccount();
    const { disconnect } = useDisconnect();

    return <MyWalletWrapper>
        <h1>My Wallet</h1>
        
        <hr />
        
        <div className="connector">
            <h2>{connector.name}</h2>
            <a onClick={(e) => {disconnect()}}>Disconnect</a>
        </div>

        <div className="address">
            {accountTruncate(address)}
            <div className="addressButtons">
                <button onClick={() => {navigator.clipboard.writeText(address)}}>
                    <img src="copy.png"/>
                </button>
                <button>
                    <img src="share.png" />
                </button>
            </div>
        </div>
        
        <hr />
        
        <h2>Open Streams</h2>
        <span className="rate">Rate: ~ 0.0045 USDC /sec</span>
        <div className="rateLine">
            <div className="rateAmount">
                <span className="amount">345.89</span>
                <img src={"USDC.png"}/>
                <span className="currency">USDC</span>
            </div>
            <a onClick={(e) => {}}>Claim Stream</a>
        </div>

        <span className="conversionSubtext">$ 344.80</span>

        <hr />
        
        <div className="network">
            <h2>Network</h2>
            <div className="networkConnection">
                <img src={isConnected ? "green-dot.png" : "red-dot.png"}/>
                Ethereum Mainnet
            </div>

        </div>
    </MyWalletWrapper>
}

export default MyWallet;