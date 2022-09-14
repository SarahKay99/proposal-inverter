import styled from "styled-components"

export const LabelWrapper = styled.div`
    margin-bottom: 5px;

    .flexBox {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .label {
        display: flex;
        align-items: center;
    }

    .subtext {
      font-family: Inter;
      font-style: normal;
      font-weight: 500;
      font-size: 10px;
      color: #9398A8;
    }
`

export const LabelNameWrapper = styled.div`
  font-size: 14px;
  font-weight: 700;
  margin-right: 4px;
  color: var(--brand-baby-blue);
`

export const QuestionMarkIcon = styled.div`
  img {
    color: var(--brand-white-blend);
    height: 18px;
    width: auto;
  }

  .infoBubble {
    display: none;

    z-index: 1;
    right: 0;
    max-width: 18em;

    background-color: var(--neutral-black);
    padding: 5px;
    font-size: 12px;
    color: var(--brand-white-blend);
    border-radius: 10px;
  }
  
  :hover {
    cursor: pointer;
  }

  :hover + .infoBubble {
    display: block;
  }
`

export const CharLimitWrapper = styled.div<{tooManyChars: boolean}>`
  font-size: 12px;
  font-weight: 300;
  color: ${(props) => props.tooManyChars ? 'var(--brand-alert-red-error)' : 'var(--brand-white-blend)'};
`