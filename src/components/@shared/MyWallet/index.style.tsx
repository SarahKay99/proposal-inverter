import styled from "styled-components"

export const MyWalletWrapper = styled.div`
    background: var(--brand-deep-dark-blue);
    text-align: left;
    min-width: 25em;

    position: relative;
    top: 14.5em;
    right: 10em;

    padding: 0.75em 1.2em 0.75em 1.2em;

    h1 {
        color: var(--brand-ocean-blue);
        margin: 0;
    }

    h2 {
        font-size: 17px;
        font-weight: 700;
        margin-top: 6px;
        margin-bottom: 10px;
    }

    hr {
        width: 25%;
        margin-left: 0;
        height: 0.02px;
        color: white;
    }

    a {
        font-size: 14px;
        font-weight: 200;
    }

    .address {
        display: flex;
        align-items: center;
        justify-content: space-between;

        padding-left: 0.5em;
        padding-right: 0.5em;
        padding-top: 0.4em;
        padding-bottom: 0.4em;

        margin-bottom: 1.4em;

        background: var(--neutral-black);
        border-radius: 4px;

        color: var(--brand-medium-gray);
    }

    .addressButtons {
        display: flex;
    }

    .address button {
        background: none;
        border: none;
    }

    .address button:hover {
        cursor: pointer;
    }

    .network {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .networkConnection img {
        margin-right: 6px;
    }

    .connector {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .rateLine {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .rateLine img {
        width: 15px;
        height: auto;
    }

    .rateLine rate {
        font-size: 15px;
    }

    .rateLine .rateAmount {
        font-size: 16px;
    }

    .rateLine .rateAmount .amount {
        margin-right: 0.3em;
    }

    .rateLine .rateAmount img {
        margin-right: 0.3em;
    }

    .conversionSubtext {
        font-family: Inter;
        color: var(--brand-indigo);
        line-spacing: 1px;
    }
`