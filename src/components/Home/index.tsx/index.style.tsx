import styled from "styled-components";

export const HomePageWrapper = styled.div`
    margin-top: 3.5%;
`

export const HomePageTitle = styled.div`
    margin-left: 8%;
    margin-right: 8%;

    text-align: left;
    font-family: Vollkorn;
    font-size: calc(100px + 2vmin);
    font-weight: 900;
    width: 70%;
    color: var(--brand-white-blend);

    span {
        color: var(--brand-ocean-blue);
    }
`

export const CreateProposalButtons = styled.div`
    margin-left: 8%;
    margin-right: 8%;
    
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-align: left;
    margin-top: 2em;
    margin-bottom: 2em;

    button {
        margin-right: 26px;
    }
`

export const HomePageSubtitle = styled.div`
    margin-left: 8%;
    margin-right: 8%;
    
    text-align: left;
    font-weight: 500;
`

export const InverterOffers = styled.div`
    margin-left: 0 !important;
    margin-right: 0 !important;

    text-align: center;
    font-family: Vollkorn;
    font-size: 40px;

    background: var(--brand-deep-dark-blue);
    padding-top: 5px;
    padding-bottom: 60px;

    .inverterOffersFlexBox {
        display: flex;
        align-items: center;
        justify-content: space-evenly;
    }
`

export const GetFundedByTheBest = styled.div`
    margin-left: 8%;
    margin-right: 8%;

    text-align: left;
    font-family: Vollkorn;
    font-size: 40px;

    .fundingPartnersFlexBox {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    h4 {
        margin-bottom: 10px;
        font-size: 30px;
    }

    h1 {
        font-size: 70px;
        margin-top: 10px;
    }
`

export const ProposalsToFund = styled.div`  
    margin-left: 8%;
    margin-right: 8%; 

    text-align: left;
    font-family: Vollkorn;
    font-size: 25px;

    .proposalsToFundFlexBox {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    h4 {
        margin-bottom: 10px;
        font-size: 30px;
    }

    h1 {
        font-size: 70px;
        margin-top: 10px;
    }
`

export const ReadOurBlog = styled.div`
    margin-left: 8%;
    margin-right: 8%;

    text-align: left;
    font-family: Vollkorn;
    font-size: 25px;

    .blogpostsFlexBox {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    h2 {
        font-size: 28px;
    }
`