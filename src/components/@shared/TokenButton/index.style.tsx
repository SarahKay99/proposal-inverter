import styled from "styled-components"

export const TokenButtonWrapper = styled.button`
    font-family: Inter;
    font-weight: 700;

    border-radius: 20px;
    border: solid var(--brand-ocean-blue) 2px;
    color: var(--brand-baby-blue);
    margin: 0em 0.7em 0em 0em;

    background-color: transparent;
    width: 6em;
    height: 3em;

    :hover {
        cursor: pointer;
        background-color: var(--brand-ocean-blue);
    }
`