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

export const Page4Specs = styled.div`
    text-align: center;

    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
        margin-bottom: 8px;
    }

    p {
        font-family: Inter;
        font-size: 18px;
        width: 60vw
    }
`

export const BottomText = styled.div<{headerColor?: 'default' | 'pumpkin'}>`
    text-align: center; 

    h3 {
        color: ${(props: any) => 
            (props.headerColor == 'default' || props.headerColor == undefined) 
        ? 'var(--brand-white-blend)' : 'var(--brand-pumpkin) !important'};
    }

    margin: 20px 0px 30px 0px;
`