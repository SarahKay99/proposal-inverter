import styled from "styled-components"

export const Page2Specs = styled.div`
    a {
        font-family: Inter;
        font-size: 15px;
        font-weight: 700;

        margin-left: 5vw;
    }

    a:hover {
        cursor: pointer;
        border-bottom: solid var(--brand-white-blend) 1px;
    }

    h3 {
        color: var(--brand-baby-blue);
        margin-right: 5px;
        font-size: 16px;
        font-weight: 600;
    }
`

export const CreateMemberForm = styled.div`
    display: flex;
    flex-direction: column;

    background-color: var(--brand-deep-dark-blue);
    border: solid white 1px;
    border-radius: 10px;
    padding: 30px 20px 30px 20px;
    width: 100%;

    .bottomButtons {
        margin: 20px 0px 0px 0px;
        display: flex;
        align-items: center;
    }

    .form {
        display: flex;
        align-items: flex-start;
        width: -webkit-fill-available;
    }

    .firstColumn {
        width: 100%;
        margin: 0em 3em 0em 0em;
    }

    .secondColumn {
        width: -webkit-fill-available;
        width: -moz-available;
    }
`

export const ReceipientWalletForm = styled.div`
    background-color: var(--brand-deep-dark-blue);
    border: solid white 1px;
    border-radius: 10px;
    padding: 10px 15px 30px 15px;
    width: 100%;

    margin: 0px 0px 60px 0px;

    .buttons {
        display: flex;
        width: 50%;
        justify-content: space-between;
        margin-top: 10px;
    }

    .receiveFunding {
        margin: 10px 0px 0px 0px;
    }

    .label {
        font-family: Inter;
        font-style: normal;
        font-weight: 500;
        font-size: 10px;
        color: #9398A8;
    }

    .walletTitle {
        margin-bottom: 0px;
    }

    h3 {
        margin-bottom: 10px;
    }
`

export const ProposalWorking = styled.div`
    display: flex;
`

export const ProposalFunding = styled.div`
    display: flex;
`