import React from "react";
import { ButtonWrapper } from "./Button.style";

interface ButtonProps {
    text: String
    rounding?: 'default' | 'round'
    color?: 'default' | 'blueIce'
    width?: 'default' | number
    height?: 'default' | number
}

function Button({
    text,
    rounding='default',
    color='default',
    width='default',
    height='default'
}: ButtonProps) {
    return (
        <ButtonWrapper 
            className={"ButtonText"}
            rounding={rounding}
            color={color}
            width={width}
            height={height}
        >
            {text}
        </ButtonWrapper>
    ) 
}

export default Button;