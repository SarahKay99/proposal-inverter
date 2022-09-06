import styled from "styled-components"

export const FundingPartnersWrapper = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    color: white;

    img {
        width: 7em;
        height: auto;
        border-radius: 6px;
    }

    .title {
        font-size: 28px;
        font-weight: 700;
    }

    .fundingPartnerLink {
        font-size: 16px;
        font-weight: 500;
    }

    .fundingPartnerLink:hover {
        cursor: pointer;
        border-bottom: solid white 2px;
    }

`