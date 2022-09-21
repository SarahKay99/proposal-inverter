import styled from "styled-components";

export const InputFieldWrapper = styled.div<{
  margin?: string,
  width?: number | 'default',
  height?: number | 'default',
}>`
  margin: ${(props: any) => props.margin == 'default' || undefined ? "0px 0px 0px 0px" : props.margin};
  width: ${(props: any) => props.width == 'default' || undefined ? "-webkit-fill-available" : `${props.width}em`};
  width: ${(props: any) => props.width == 'default' || undefined ? "-moz-available" : `${props.width}em`};
  height: ${(props: any) => props.height == 'default' || undefined ? "" : `${props.height}em`};

  
  .duration {
    display: flex;
    color: #A3A3A3;
    font-size: 16px;
    font-weight: 700;
  }

  .durationLabel {
    margin-right: 10px;
  }

  .start {
      display: flex;
      margin-right: 20px;
  }

  .end {
      display: flex;
  }

`

export const InputWrapper = styled.div<{
  state: 'normal' | 'error' | 'warning', 
  fieldHeight?: number | 'default',
  fieldWidth?: number | 'default' | 'fill-available',
  buttonHeight?: number | 'default',
  buttonWidth?: number | 'default' | 'fill-available'
}>`
  text-align: left;
  width: 100%;

  input[type=text] {
    font-family: Inter;
    border-radius: 10px;
    padding-left: 12px;
    width: ${(props) => (props.fieldWidth == 'default' || props.fieldWidth == undefined || props.fieldWidth == 'fill-available') ? "-webkit-fill-available" : `${props.fieldWidth}em`};
    width: ${(props) => (props.fieldWidth == 'default' || props.fieldWidth == undefined || props.fieldWidth == 'fill-available') ? "-moz-available" : `${props.fieldWidth}em`};
    height: ${(props) => (props.fieldHeight == 'default' || props.fieldHeight == undefined) ? "2.8em" : `${props.fieldHeight}em`};
    border: ${(props) => props.state == 'normal' ? 'solid var(--background-color) 2px;'
      : props.state == 'warning' ? 'solid var(--brand-alert-orange-warning) 2px;'
      : props.state == 'error' && 'solid var(--brand-alert-red-error) 2px;'
    }
    background: ${(props) => props.state == 'normal' ? 'var(--brand-white-blend);'
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
    width: ${(props) => (props.buttonWidth == 'default' || props.buttonWidth == undefined || props.buttonWidth == 'fill-available') ? "-webkit-fill-available" 
    : `${props.buttonWidth}em`};
    width: ${(props) => (props.buttonWidth == 'default' || props.buttonWidth == undefined || props.buttonWidth == 'fill-available') ? "-moz-available" 
    : `${props.buttonWidth}em`};
    height: ${(props) => (props.buttonHeight == 'default' || props.buttonHeight == undefined) ? "2.8em" : `${props.buttonHeight}em`};
  }

  textarea {
    font-family: Inter;
    border-radius: 7px;
    padding-left: 12px;
    padding-top: 12px;
    width: ${(props) => props.fieldWidth == 'default' || props.fieldWidth == undefined ? "-webkit-fill-available" : `${props.fieldWidth}em`};
    width: ${(props) => props.fieldWidth == 'default' || props.fieldWidth == undefined ? "-moz-available" : `${props.fieldWidth}em`};
    height: ${(props) => props.fieldHeight == 'default' || props.fieldHeight == undefined ? "5.8em" : `${props.fieldHeight}em`};
  }
`

export const HelperTextWrapper = styled.div`
  font-weight: 400;
  font-size: 12px;
  text-align: left;
  margin-left: 3px;
  margin-top: 5px;

  color: #797979;

  .errorText {
    color: var(--brand-alert-red-error);
  }

  .warningText {
    color: var(--brand-alert-orange-warning);
  }
`