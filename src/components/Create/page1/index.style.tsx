import styled from "styled-components"

export const Page1Specs = styled.div`
    .flexBox {
        display: flex;
    }

    .form {
        display: flex;
    }

    .widthControl {
        width: 45vw;
    }
`

export const ProposalLeading = styled.div`
    margin-top: 35px;

    .secondColumn {
        display: flex;
        flex-direction: column;
        width: 40vw;
    }

    .thirdColumn {
        width: 100%;
    }
`

export const ProposalAbout = styled.div`
    margin-bottom: 100px;
    margin-top: 35px;

    .addExternalMedia {
        display: flex;
        align-items: flex-end;
    }

    .removeMedia {
        position: relative;
        bottom: 35px;

        height: 10px;
        width: 10px;

        border-radius: 50%;
        border: none;
        background-color: red;
    }

    .removeMedia:hover {
        cursor: pointer;
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