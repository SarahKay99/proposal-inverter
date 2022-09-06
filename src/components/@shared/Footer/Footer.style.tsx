import styled from "styled-components";

export const FooterWrapper = styled.div<{isHomePage?: boolean}>`
    position: relative;
    bottom: 0px;
    width: 100%;
    height: 6.5em;
    background: ${(props) => props.isHomePage ? 'var(--brand-background-color);' : 'var(--brand-deep-dark-blue)'};
    
    display: flex;
    align-items: flex-start;
    justify-content: space-evenly;

    .col .oneLiner {
        font-size: 18px;
        font-weight: 400;
    }

    .side {
        text-align: left;
    }

    .colTitle {
        font-size: 20px;
        font-weight: 500;
        color: var(--brand-baby-blue);
    }

    .followUs {
        margin-bottom: 10px;
    }

    .col {
        padding-top: 10px;
        display: inline-grid;
        text-align: left;
    }

    .col .name {
        font-weight: 600;
        font-size: 24px;
        line-height: 29px;
    }

    .col a {
        font-weight: 700;
        font-size: 12px;
        line-height: 15px;
        margin-top: 0.4em;
        width: auto;
    }

    .col a:hover {
        cursor: pointer;
        border-radius: 5px;
        border-bottom: solid 2px;
        border-image: var(--brand-blue-ice-gradient) 1;
    }
`