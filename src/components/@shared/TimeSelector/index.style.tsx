import styled from "styled-components"

export const TimeSelectorWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    width: min-content;
    margin: 0em;
    
    font-family: Inter;

    .flexBox {
        display: flex;
        align-items: center; 
    }

    button {
        width: 5.8vw;
    }

    button:hover {
        cursor: pointer;
    }

    .inputField {
        width: 3.5vw !important;
    }

    .dropdownButton {
        border: none;

        font-weight: 700;
        color: white;
        background-color: transparent;
    }

    .dropdownButton:hover {
        background-color: var(--brand-background-color);
    }

    ul {
        margin: 0em;
    }

    li {
        list-style-type: none;
    }

    li button {
        background-color: none;
        border: none;
    }

    li button:hover {
        background-color: var(--brand-ocean-blue);
    }
`