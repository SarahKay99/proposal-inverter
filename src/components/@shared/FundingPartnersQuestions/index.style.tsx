import styled from "styled-components"

export const FundingPartnersQuestionsWrapper = styled.div<{
    selected?: boolean
    showQuestionsAnswered?: boolean
    noQuestionsLeft?: boolean
    margin?: string
}>`
    font-family: Inter;
    font-size: 16px;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);

    margin: ${(props: any) => props.margin ? props.margin : '1vh 0vh 1vh 0vh'};
    text-align: left;
    background-color: #1B1722;
    border: ${(props: any) => props.selected ? 'none'
        : !props.showQuestionsAnswered ? 'none'
        : (props.showQuestionsAnswered && !props.noQuestionsLeft) ? 'solid #E94057 1.5px'
        : (props.showQuestionsAnswered && props.noQuestionsLeft) && 'solid var(--brand-pistachio) 1.5px'
    };
    border-radius: 10px;

    .padding {
        padding: 1.2em 1.2em 1.2em 1.2em;
    }

    h1 {
        margin: 0.2em 0em 0.05em 0em;
    }

    margin: 0em 0em 2em 0em;
`

export const TitleAndSummary = styled.div`

`

export const QuestionsDropdown = styled.div`
    background-color: #202A40;
    border-radius: 0px 0px 10px 10px;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
    
`

export const VisitApplication = styled.div<{noQuestionsLeft?: boolean}>`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #202A40;

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
        font-size: 12px;
        color: ${(props) => props.noQuestionsLeft ? 'var(--brand-pistachio)' : '#F4846C'};
    }

    .questionQuantity {
        font-size: 18px;
        font-weight: 700;
        margin: 0em 1.5em 0em 0em;
    }
`