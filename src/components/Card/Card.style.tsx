import styled from "styled-components";

export const ProposalCard = styled.div`
    background: var(--brand-black-gradient);
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
    border-radius: 6px;
    padding: 20px;

    text-align: -webkit-right;
    text-align: -moz-right;
`

export const Status = styled.div<{status: String}>`
    border-radius: 87px;
    width: fit-content;
    padding: 0em 0.5em;
    border: solid ${(props) =>
        props.status == 'New Proposal' ? 'var(--brand-lavendar)'
        : props.status == 'Needs Contributors' ? 'var(--brand-jasmine)'
        : props.status == 'Inactive' ? 'var(--brand-ms-blue)'
        : props.status == 'Needs Funding' && 'var(--brand-pumpkin)'  
    } 1.5px;
    margin-bottom: 18px;
`

export const TitleWrapper = styled.div`
    text-align: left;
    margin-bottom: 7px;
`

export const TextWrapper = styled.div`
    text-align: left;
    margin-bottom: 15px;
`

export const BottomBarWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`

export const DAOWrapper = styled.div`
    display: flex;
    align-items: center;

    img {
        width: 1.8em;
        height: auto;
        border-radius: 50%;
        margin-right: 6px;
    }
`