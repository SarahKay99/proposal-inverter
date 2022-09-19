import styled from "styled-components"

export const RoadmapSummaryWrapper = styled.div<{margin: string, milestones?: boolean}>`
    margin: ${(props: any) => props.margin == undefined ? "" : props.margin};
    background-color: ${(props: any) => props.milestones ? 'rgba(14, 23, 40, 0.5)' : 'var(--brand-deep-dark-blue)'};
    box-shadow: 2px 5px rgba$(0, 0, 0, 0.1);
    border-radius: 10px;

    display: flex;
    justify-content: center;

    padding: 25px;

    .none {
        font-family: Inter;
        font-weight: 700;
        font-style: italic;
        color: var(--brand-baby-blue);
        width: 100%;
        text-align: left;
    }
`

export const RoadmapTile = styled.div<{start?: boolean}>`
    background-color: ${(props) => props.start ? '#30425F' : 'var(--brand-deep-dark-blue)'};
    border-radius: 10px;
    box-shadow: 5px 10px rgba(0, 0, 0, 0.05);
    margin: 0px 10px 0px 10px;

    display: flex;
    flex-direction: column;
    text-align: center;

    max-height: 80%;
    padding: 10px;

    .milestoneTime {
        font-family: Inter;
        font-style: normal;
        font-weight: 500;
        font-size: 10px;
        color: #9398A8;
    }

    .fundingAmount {
        margin: 5px 0px 0px 0px;
        font-family: Inter;
        font-weight: 700;
        font-size: 16px;
        color: var(--brand-white-blend);
    }

    .milestoneText {
        margin: 5px 0px 0px 0px;
        font-family: Inter;
        font-weight: 500;
        font-size: 12px;
        color: #BAEAFE;
    }
`