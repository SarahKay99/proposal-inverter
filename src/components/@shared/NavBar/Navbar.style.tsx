import styled from "styled-components";

export const NavbarWrapper = styled.div`
    position: sticky;
    top: 0px;
    width: 100%;
    height: 70px;
    background: var(--brand-deep-dark-blue);
    
    display: flex;
    align-items: center;
    justify-content: space-between;

    .leftSide {
        padding-left: 3.5em;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .leftSide a {
        margin-left: 35px;
    }

    .rightSide {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-right: 3.5em;

        font-size: 12px;
    }

    .rightSide .firstRight {
        display: flex;
        align-items: center;
        padding-right: 20px;
    }

    a {
        font-weight: 500;
        font-size: 16px;
    }

    a:hover {
        cursor: pointer;
        border-radius: 5px;
        border-bottom: solid 3px;
        border-image: var(--brand-blue-ice-gradient) 1;
    }
`

export const ClaimAmount = styled.div`
    color: var(--brand-medium-gray);
    font-size: 13px;
    padding: 10px;
`

export const Seperator = styled.div`
    color: var(--brand-white-blend);
    font-size: 16px;
`