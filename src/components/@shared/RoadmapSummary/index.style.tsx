import styled from "styled-components"

export const RoadmapSummaryWrapper = styled.div<{margin: string, milestones?: boolean}>`
    margin: ${(props: any) => props.margin == undefined ? "" : props.margin};
    background-color: ${(props: any) => props.milestones ? 'rgba(14, 23, 40, 0.5)' : 'var(--brand-deep-dark-blue)'};
    box-shadow: 2px 5px rgba$(0, 0, 0, 0.1);
    border-radius: 10px;

    display: flex;
    justify-content: center;
    flex-direction: column;

    .textSummary {
        display: flex;
        margin: 0em 0em 1em 0em;
    }

    .milestones {
        display: flex;
        justify-content: flex-start
    }

    .flexSpan {
        display: flex;
        flex-direction: column;
        margin: 0em 7em 0em 0em;

        font-family: Inter;
        font-size: 14px;
    }

    .daysFont {
        font-size: 12px;
        color: #797979;
        margin: 0em 0em 0em 0.6em;
    }

    .flexSpan b {
        margin: 0em 0em 0.5em 0em;
    }

    padding: 10px 10px 10px 10px;

    .none {
        font-family: Inter;
        font-weight: 700;
        font-style: italic;
        color: var(--brand-baby-blue);
        width: 100%;
        text-align: left;
    }

    .font {

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