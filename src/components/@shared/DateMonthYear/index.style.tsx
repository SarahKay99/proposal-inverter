import styled from "styled-components"

export const DateMonthYearWrapper = styled.div`
    .link {
        color: var(--brand-ocean-blue);
        font-family: Inter;
        font-weight: 500;
        font-size: 12px;
    }

    .link:hover {
        cursor: pointer;
        border-bottom: solid var(--brand-ocean-blue) 1px;
    }
`

export const DateMonthYearField = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-align: center;

    width: 140px;
    padding: 0px 15px 0px 10px;
    border-radius: 10px;
        
    background: transparent;

    border: solid var(--brand-white-blend) 1px;

    font-weight: 700;

    .slash {
        color: #3E557A;
    }

    .dateField {
        background: transparent !important;
        width: 35px !important;
        border: none !important;
        color: white !important;
        font-weight: 700;
        padding: 0px !important;
        text-align: center;
    }

    .dateField:focus {
        outline: none;
    }

    ::placeholder {
        color: white;
        opacity: 1;
    }

    :-ms-input-placeholder {
        color: white;
    }

    ::-ms-input-placeholder {
        color: white;
    }
`