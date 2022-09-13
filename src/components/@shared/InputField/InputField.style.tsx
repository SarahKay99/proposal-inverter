import styled from "styled-components";

export const InputFieldWrapper = styled.div<{
  margin?: string,
  width?: number | 'default',
  height?: number | 'default',
}>`

  margin: ${(props: any) => props.margin == 'default' || undefined ? "0px 0px 0px 0px" : props.margin};
  width: ${(props: any) => props.width == 'default' || undefined ? "" : `${props.width}em`}
  height: ${(props: any) => props.height == 'default' || undefined ? "" : `${props.height}em`}

  .topLine {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 5px;
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
  color: var(--brand-baby-blue);
`

export const InputWrapper = styled.div<{
  state: 'normal' | 'error' | 'warning', 
  fieldHeight?: number | 'default',
  fieldWidth?: number | 'default',
  buttonHeight?: number | 'default',
  buttonWidth?: number | 'default'
}>`
  text-align: left;

  input[type=text] {
    border-radius: 10px;
    padding-left: 12px;
    width: ${(props) => props.fieldWidth == 'default' || undefined ? "23em" : `${props.fieldWidth}em`};
    height: ${(props) => props.fieldHeight == 'default' || undefined ? "2.8em" : `${props.fieldHeight}em`};
    border: ${(props) => props.state == 'normal' ? 'solid var(--background-color) 2px;'
      : props.state == 'warning' ? 'solid var(--brand-alert-orange-warning) 2px;'
      : props.state == 'error' && 'solid var(--brand-alert-red-error) 2px;'
    }
    background: ${(props) => props.state == 'normal' ? 'white;'
      : props.state == 'warning' ? "url('./../../public/warning-icon.png') white no-repeat right;"
      : props.state == 'error' && "url('./../../public/error-icon.png') white no-repeat right;"
    }
    background-position: 7px 7px;
  }

  input[type=text]:focus {
    border: ${(props) => props.state == 'normal' ? 'solid var(--background-color) 2px;'
      : props.state == 'warning' ? 'solid var(--brand-alert-orange-warning) 2px'
      : props.state == 'error' && 'solid var(--brand-alert-red-error) 2px;'
    }
  }

  button {
    border-radius: 5px;
    padding-left: 12px;
    padding-right: 12px;
    width: ${(props) => props.buttonWidth == 'default' ? "23em" : `${props.buttonWidth}em`};
    height: ${(props) => props.buttonHeight == 'default' ? "2.8em" : `${props.buttonHeight}em`};
  }

  textarea {
    border-radius: 7px;
    padding-left: 12px;
    padding-top: 12px;
    width: ${(props) => props.fieldWidth == 'default' || undefined ? "23em" : `${props.fieldWidth}em`};
    height: ${(props) => props.fieldHeight == 'default' || undefined ? "5.8em" : `${props.fieldHeight}em`};
  }
`

export const DropdownFieldWrapper = styled.div<{selected: boolean}>`
  .selectButton {
    border-radius: ${(props) => props.selected ? '10px 10px 0px 0px': '10px'};
    border-bottom: ${(props) => props.selected ? 'solid var(--brand-ocean-blue) 1px': 'none'};
    padding-left: 12px;
    padding-right: 12px;
    width: 23em;
    height: 2.8em;
    text-align: left;
    border: none;

    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  ul {
    border-radius: 0px;
    display: ${(props) => props.selected ? 'block' : 'none'};
    margin: 0px;
    padding: 0px;
  }

  li {
    border-radius: 0px;
    display: ${(props) => props.selected ? 'block' : 'none'};
    border: none;
    list-style-type: none;
  }

  li button {
    border-radius: 0px;
    display: ${(props) => props.selected ? 'block' : 'none'};
    border: none;
  }

  li :hover {
    background-color: var(--brand-ocean-blue);
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

    z-index: 1;
    right: 0;
    max-width: 18em;

    background-color: var(--neutral-black);
    padding: 5px;
    font-size: 12px;
    color: white;
    border-radius: 10px;
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
  font-size: 12px;
  font-weight: 300;
  color: ${(props) => props.tooManyChars ? 'var(--brand-alert-red-error)' : 'white'};
`