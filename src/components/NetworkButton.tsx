import React from "react";
import { NetworkButtonWrapper } from './NetworkButton.style';

interface NetworkButtonProps {

}

function NetworkButton({}: NetworkButtonProps) {
    return <NetworkButtonWrapper>
        <select className={"dropdown"}>
            <option value="Polygon">Polygon</option>
            <option value="Ethereum">Ethereum</option>
            <option value="Celo">Celo</option>
            <option value="Arbitrum">Arbitrum</option>
            <option value="Optimism">Optimism</option>
            <option value="Gnosis">Gnosis</option>
        </select>
    </NetworkButtonWrapper>
}

export default NetworkButton;