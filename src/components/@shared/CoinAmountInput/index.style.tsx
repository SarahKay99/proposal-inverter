import styled from "styled-components"

export const CoinAmountInputWrapper = styled.div`
    .flexBox {
        display: flex;
    }

    input {
        border-radius: 10px 0px 0px 10px !important;
        margin: 0px;
        height: initial !important;
        width: 55px !important;

        border: solid var(--brand-white-blend) 2px !important;
    }
    
    button {
        border-radius: 0px 10px 10px 0px;
        margin: 0px;
        width: 77px !important;

        background-color: #1E293B;
        border: solid var(--brand-white-blend) 1px;
        border-left: none;

        display: flex;
        align-items: center;
        justify-content: space-around;

        color: var(--brand-white-blend);
        font-weight: 700;
    }

    button:hover {
        cursor: pointer;
        background-color: var(--brand-background-color);
    }

    .icon {
        height: 20px;
        margin-right: 5px;
    }
`