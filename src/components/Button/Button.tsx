import React from "react";
import { ButtonWrapper } from "./Button.style";

interface ButtonProps {
    text: String
    onClick: any
    rounding?: 'default' | 'round' | number
    color?: 'default' | 'blueIce' | 'none'
    width?: 'default' | number
    height?: 'default' | number
}

function Button({
    text,
    onClick,
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
            onClick={onClick}
        >
            {text}
        </ButtonWrapper>
    ) 
}

export default Button;