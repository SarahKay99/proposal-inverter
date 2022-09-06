import styled from "styled-components";

export const WalletConnectedWrapper = styled.div<{connectedTo: string, dropdownSelected?: boolean}>`
    width: 150px;
    height: 30px;
    background: none;
    border: solid 3px;
    border-image: var(--brand-blue-ice-gradient) 1;   

    border: ${(props) => props.connectedTo == "ethereum" ? "solid var(--brand-dark-gray) 3px"
        : props.connectedTo == "celo" ? "solid var(--brand-pistachio) 3px"
        : props.connectedTo == "polygon" ? "solid var(--brand-violet-light) 3px"
        : props.connectedTo == "arbitrum" ? "solid var(--brand-medium-gray) 3px"
        : props.connectedTo == "optimism" ? "solid var(--brand-pumpkin) 3px"
        : props.connectedTo == "gnosis" && "solid var(--brand-red-crayola) 3px"
    };

    .walletConnectedButton {
        display: flex;
        align-items: center;
        justify-content: space-around;
    
        height: 100%;
        width: 100%;
        background: transparent;
        border: none;

        font-weight: 700;
        font-size: 14px;
        color: white; 
    }

    :hover {
        cursor: pointer;
        background: ${(props) => props.connectedTo == "ethereum" ? "var(--brand-dark-gray)"
        : props.connectedTo == "celo" ? "var(--brand-pistachio)"
        : props.connectedTo == "polygon" ? "var(--brand-violet-light)"
        : props.connectedTo == "arbitrum" ? "var(--brand-medium-gray)"
        : props.connectedTo == "optimism" ? "var(--brand-pumpkin)"
        : props.connectedTo == "gnosis" && "var(--brand-red-crayola)"};
    }

    ul {
        position: relative;
        top: 4px;
        background: var(--brand-deep-dark-blue);
        border-radius: 0px;
        display: ${(props) => props.dropdownSelected ? 'block' : 'none'};
        margin: 0px;
        padding: 0px;
    }

    li {
        align-items: center;
        justify-content: space-evenly;

        padding-top: 10px;
        padding-bottom: 10px;

        border-radius: 0px;
        display: ${(props) => props.dropdownSelected ? 'flex' : 'none'};
        border: none;
        list-style-type: none;
    }

    li button {
        background: none;
        border: solid transparent 2px;
        font-weight: 700;
        font-size: 12px;
        color: white;
    }

    li button:hover {
        cursor: pointer;
        border: solid 2px;
        border-image: var(--brand-blue-ice-gradient) 1;
        border-radius: 10px;
    }
`

export const ConnectWalletWrapper = styled.button`
    width: 150px;
    height: 40px;
    background: none;
    border-radius: 10px;
    border: solid 3px;
    border-image: var(--brand-blue-ice-gradient) 1;
    
    font-weight: 700;
    font-size: 12px;
    color: white;

    :hover {
        cursor: pointer;
        background: var(--brand-blue-ice-gradient);
    }
`