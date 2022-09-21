import styled from "styled-components"

export const CategoryMenuWrapper = styled.div`
    .option {
        font-family: Inter;
        font-weight: 700;
        color: white;

        width: 9em;
        height: 3em;

        margin: 0px 3px 0px 3px;

        background: none;
        border-radius: 10px;
        border: solid var(--brand-indigo) 1.5px;
    }

    .option:hover {
        cursor: pointer;
        background: var(--brand-indigo);
    }
`