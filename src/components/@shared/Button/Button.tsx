import React from "react";
import { ButtonWrapper } from "./Button.style";

export type ButtonProps = {
    text: String
    onClick: any
    rounding?: 'default' | 'round' | number
    color?: 'default' | 'blueIce' | 'none'
    border?: 'default' | 'blueIce' | 'indigo' | 'none'
    width?: 'default' | 'fill-available' | number
    height?: 'default' | number
    sizeType?: 'em' | 'px'
    hover?: 'default' | 'blueIce' | 'indigo' | 'none'
    textColor?: 'default' | 'white' | 'blue'
    fontWeight?: 'default' | number
    margin?: string
    props?: any
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
    margin='default',
    props
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
            onClick={(e) => { props ? onClick(e, props) : onClick(e) }}
            margin={margin}
        >
            {text}
        </ButtonWrapper>
    ) 
}

export default Button;