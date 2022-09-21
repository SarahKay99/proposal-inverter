import styled from "styled-components"

export const MilestoneWrapper = styled.div`
    display: flex;
    align-items: center;

    background: var(--brand-deep-dark-blue);
    padding: 8px 50px 28px 50px;
    border-radius: 10px;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
    margin: 0px 0px 30px 10px;
    width: 87%;

    h2 {
        font-family: Inter;
        font-weight: 900;
        font-size: 26px;

        background: linear-gradient(269.78deg, #BBEBFF -48.62%, #0092FF 84.26%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-fill-color: transparent;
    }

    h3 {
        color: var(--brand-baby-blue);
        margin-right: 5px;
        font-size: 16px;
        font-weight: 600;
    }

    ol {
        margin: 3px 0px 3px 0px;
        list-style-position: inside;
    }

    li {
        list-style-type: none;
        text-indent: -1em;
        margin: 4px 0px 0px 0px;
    }

    .font {
        color: var(--brand-medium-gray);
        font-family: inter;
        font-weight: 500;
        font-size: 15px;
    }

    .date {
        margin-right: 3em;
    }

    .buttons {
        margin: 20px 0px 0px 0px;
    }

    .firstColumn {
        width: 100%;
    }

    .secondColumn {
        width: 100%;
        text-align: center;
        display: flex;
        flex-direction: column;
    }

    .fundingAmount {
        font-size: 30px;
    }

    .currency {
        font-size: 20px;
        font-weight: 600;
    }

    .currencyDisplay {
        display: flex;
        align-items: center;
        justify-content: center;
        
        margin: 15px 0px 0px 0px;
        text-align: center;
    }
    
    img {
        height: 1em;
        width: 1em;
        margin: 0px 5px 0px 0px;
    }
`