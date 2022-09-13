import styled from "styled-components";

export const ProgressBarWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding-left: 24%;
    padding-right: 24%;

    hr {
        width: 100%;
        background: #979797;
        border: solid #979797 1px;
    }
`

export const ProgressBarNumber = styled.div<{activePage: boolean}>`
    color: var(--brand-background-color);
    font-weight: 700;

    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: ${(props: any) => props.activePage ? "var(--brand-baby-blue)" : "#979797"}
`

export const ProgressBarItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const ProgressBarText = styled.div<{activePage: boolean}>`
    margin-top: 0.7em;

    font-size: 14px;
    font-family: Inter;
`