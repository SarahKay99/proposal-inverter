import styled from "styled-components";

export const LabelWrapper = styled.div`
  .topLine {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .flexBox {
    display: flex;
    align-items: center;
  }
`

export const LabelNameWrapper = styled.div`
  font-size: 14px;
  font-weight: 700;
  margin-right: 4px;
`

export const InputWrapper = styled.div`
  margin-top: 5px;

  input {
    border-radius: 10px;
    padding-left: 12px;
    width: 23em;
    height: 2.8em;
  }
`

export const QuestionMarkIcon = styled.div`
  img {
    color: white;
    height: 18px;
    width: auto;
  }

  .infoBubble {
    display: none;
  }
  
  :hover {
    cursor: pointer;
  }
      
  :hover + .infoBubble {
    display: block;
  }
`

export const HelperTextWrapper = styled.div`
  font-weight: 400;
  font-size: 12px;
  text-align: left;
  margin-left: 3px;
  margin-top: 5px;

  .errorText {
    color: var(--brand-alert-red-error);
  }
`

export const CharLimitWrapper = styled.div<{tooManyChars: boolean}>`
    font-size: 14px;
    font-weight: 300;
    color: ${(props) => props.tooManyChars ? 'red' : 'white'};
`

export const DropdownInputFieldStyled = styled.select`

`