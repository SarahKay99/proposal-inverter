import styled from "styled-components";

export const WalletOptionsWrapper = styled.div`
    width: 125px;

    .walletDropdown {
        width: 100%;
        background: none;
        border: none;
        color: var(--brand-medium-gray);
        padding: 10px;
        font-size: 13px;

        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    
    .walletDropdown:hover {
        cursor: pointer;
    }
`