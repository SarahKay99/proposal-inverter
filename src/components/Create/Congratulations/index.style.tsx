import styled from "styled-components";

export const CongratulationsWrapper = styled.div`
    text-align: center;
    display: flex;
    justify-content: center;

    margin-top: 40px;
    margin-bottom: 60px;
`

export const CongratulationsBox = styled.div`
    padding: 20px;
    background: #171E2E;
    width: 70%;
    border: solid var(--brand-white-blend) 1px;
    border-radius: 6px;

    h1 {
        margin-bottom: 5px;
    }

    .text {
        font-family: Inter;
        font-size: 16px;
        font-weight: 300;

        margin-top: 20px;
        margin-bottom: 35px;
    }

    .shareProposal {
        margin-bottom: 35px;
    }

    .buttonsFlexBox {
        padding-left: 55px;
        padding-right: 55px;

        margin-bottom: 40px;
        display: flex;
        justify-content: space-evenly;
    }
`
