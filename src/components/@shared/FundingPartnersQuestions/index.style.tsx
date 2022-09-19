import styled from "styled-components"

export const FundingPartnersQuestionsWrapper = styled.div<{
    selected?: boolean
    showQuestionsAnswered?: boolean
    noQuestionsLeft?: boolean
    margin?: string
}>`
    margin: ${(props: any) => props.margin ? props.margin : '1vh 0vh 1vh 0vh'};
    text-align: left;
    padding: 1.2em 1.2em 0em 1.2em;
    background-color: #1B1722;
    border: ${(props: any) => props.selected ? 'none'
        : !props.showQuestionsAnswered ? 'none'
        : (props.showQuestionsAnswered && !props.noQuestionsLeft) ? 'solid var(--brand-alert-orange-warning) 1.5px'
        : (props.showQuestionsAnswered && props.noQuestionsLeft) && 'solid var(--brand-pistachio) 1.5px'
    };
    border-radius: 10px;
`

export const TitleAndSummary = styled.div`

`

export const QuestionsDropdown = styled.div`

`

export const VisitApplication = styled.div<{noQuestionsLeft?: boolean}>`
    display: flex;
    align-items: center;
    height: 2em;

    .blankButton {
        background-color: transparent;
        border: none;
    }

    .blankButton:hover {
        cursor: pointer;
    }

    .visitApp {
        font-size: 14px;
    }

    .visitApp:hover {
        cursor: pointer;
        border-bottom: solid white 1px;
    }

    .questionStatus {
        color: ${(props) => props.noQuestionsLeft ? 'var(--brand-pistachio)' : 'var(--brand-alert-orange-warning)'};
    }
`