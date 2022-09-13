import React from "react";
import { ButtonWrapper } from "./Button.style";

export type ButtonProps = {
    text: String
    onClick: any
    rounding?: 'default' | 'round' | number
    color?: 'default' | 'blueIce' | 'none'
    border?: 'default' | 'blueIce' | 'none'
    width?: 'default' | number
    height?: 'default' | number
    sizeType?: 'em' | 'px'
    hover?: 'default' | 'blueIce' | 'none'
    textColor?: 'default' | 'white'
    fontWeight?: 'default' | number
    margin?: string
}

function Button({
    text,
    onClick,
    rounding='default',
    color='default',
    border='none',
    width='default',
    height='default',
    sizeType='em',
    hover='none',
    textColor='default',
    fontWeight='default',
    margin='default'
}: ButtonProps) {
    return (
        <ButtonWrapper 
            className={"ButtonText"}
            rounding={rounding}
            color={color}
            border={border}
            width={width}
            height={height}
            sizeType={sizeType}
            hover={hover}
            textColor={textColor}
            fontWeight={fontWeight}
            onClick={onClick}
            margin={margin}
        >
            {text}
        </ButtonWrapper>
    ) 
}

export default Button;