import styled from "styled-components"

export const Page1Specs = styled.div`
    .flexBox {
        display: flex;
    }
`

export const ProposalLeading = styled.div`
    margin-top: 35px;

    .secondColumn {
        display: flex;
        flex-direction: column;
        margin-right: 2em;
    }
`

export const ProposalAbout = styled.div`
    margin-bottom: 100px;
    margin-top: 35px;

    .addExternalMedia {
        display: flex;
        align-items: flex-end;
    }

    a {
        font-family: Inter;
        font-weight: 700;
        font-size: 14px;
    }

    a:hover {
        cursor: pointer;
        border-bottom: solid white 2px;
    }
`