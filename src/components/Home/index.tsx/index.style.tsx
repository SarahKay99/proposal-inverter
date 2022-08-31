import styled from "styled-components";

export const HomePageWrapper = styled.div`
    margin-left: 8%;
    margin-right: 8%;
    margin-top: 3.5%;
`

export const HomePageTitle = styled.div`
    text-align: left;
    font-family: 'Vollkorn Bold';
    font-size: 110px;
    font-weight: 900;
    width: 70%;
    color: var(--brand-white-blend);

    span {
        color: var(--brand-ocean-blue);
    }
`

export const CreateProposalButtons = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-align: left;
    margin-top: 2em;
    margin-bottom: 2em;

    a {
        font-size: 14px;
        border-bottom: solid white 2px;
        font-weight: 500;
        margin-left: 2em;
    }

    a:hover {
        cursor: pointer;
    }
`

export const HomePageSubtitle = styled.div`
    text-align: left;
    font-weight: 500;
`

export const VisitApp = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    text-align: right;

    font-family: Vollkorn;
    font-weight: 700;
    font-size: 25px;

    h3 {
        margin-right: 1em;
    }
`

export const InverterOffers = styled.div`
    text-align: left;
    font-family: Vollkorn;
    font-size: 40px;
`

export const GetFundedByTheBest = styled.div`
    text-align: left;
    font-family: Vollkorn;
    font-size: 40px;
`

export const ProposalsToFund = styled.div`
    text-align: left;
    font-family: Vollkorn;
    font-size: 25px;
`

export const ReadOurBlog = styled.div`
    text-align: left;
    font-family: Vollkorn;
    font-size: 25px;
`