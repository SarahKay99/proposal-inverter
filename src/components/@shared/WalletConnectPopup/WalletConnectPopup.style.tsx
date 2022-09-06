import styled from "styled-components"

export const WalletConnectPopupWrapper = styled.div<{showing: boolean}>`
    top: 0; 
    left: 0; 
    width: 100%;
    height: 100%;
    position: fixed; 
    background: rgba(0, 0, 0, 0.7);
    display: ${(props: any) => props.showing ? 'block' : 'none'};
    color: white;
    text-align: center;
`

export const WalletConnectPopupContent = styled.div`
    width: 20em;
    display: flex;
    flex-direction: column;

    color: white;
    font-weight: 700;

    padding-top: 1em;
    padding-bottom: 1em;

    background: var(--brand-deep-dark-blue);
    
    hr {
        width: 8em;
    }
    
    .connectorButton {
        padding-left: 50px;
        padding-right: 50px;

        border: solid transparent 3px;
        background-color: transparent;
        
        border: none;
        color: white;

        margin-top: 0.6em;
        margin-bottom: 0.6em;
    }

    .connectorButton .connectorButtonFlexBox {
        text-align: center;
        display: flex;
        align-items: center;

        font-weight: 700;
    }

    .connectorButton .connectorButtonFlexBox img {
        margin-right: 10px;
        height: auto;
        width: 50px;
    }
    
    .connectorButton:hover {
        border: solid 3px;
        border-image: var(--brand-blue-ice-gradient) 1;
    }

    .errorMessage {
        
    }
`