import styled from "styled-components"

export const FilterWrapper = styled.div`
    display: flex;
    align-items: center;

    background: var(--brand-indigo);
    border-radius: 10px;
    justify-content: space-around;

    .filter {
        font-family: Inter;
        font-weight: 700;
        color: white;

        width: 9em;
        height: 3em;

        border: none;
        border-radius: 10px;
        background: none;
        
    }

    .filter:hover {
        cursor: pointer;
    }

    img {
        margin: 0px 0px 0px 10px;
    }
`