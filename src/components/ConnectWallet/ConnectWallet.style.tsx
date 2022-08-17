import styled from "styled-components";

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
        background: var(--brand-blue-ice-gradient);
    }
`