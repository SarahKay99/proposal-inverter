import styled from "styled-components";

export const NavbarWrapper = styled.div`
    position: sticky;
    top: 0px;
    width: 100%;
    height: 70px;
    background: var(--neutral-black);
    
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
        padding-right: 3.5em;
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