import styled from "styled-components"

export const PageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
`

export const InfoField = styled.div`
    font-family: Inter;
    font-size: 14px;
    width: 20em;
    margin-right: 9vw;

    h2 {
        font-family: Inter;
        font-size: 20px;
        color: var(--brand-baby-blue);
        margin-top: 0px;
    }
`

export const TextSummary = styled.div`
    font-size: 16px;
    font-weight: 600;
`

export const TextLine = styled.div`
    display: flex;
    align-items: center;
    height: 1.5em;

    .days {
        font-size: 10px;
        margin-left: 5px;
        color: #94A3B8;
    }

    h3 {
        color: var(--brand-baby-blue);
        margin-right: 5px;
        font-size: 16px;
        font-weight: 600;
    }
`