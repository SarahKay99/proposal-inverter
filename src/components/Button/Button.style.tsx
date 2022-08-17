import { PropsWithChildren } from "react";
import styled from "styled-components";

export const ButtonWrapper = styled.button<{
    rounding: 'default' | 'round' | number, 
    color: 'default' | 'blueIce' | 'none',
    width: 'default' | number,
    height: 'default' | number
}>`
    background: ${(props: any) => 
        props.color == 'default' ? 'var(--brand-purple-haze-gradient)'
        : props.color == 'blueIce' ? 'var(--brand-blue-ice-gradient)'
        : props.color == 'none' && 'transparent'
    };
    border-radius: ${(props: any) => 
        props.rounding == 'default' ? '5px' 
        : props.rounding == 'round' ? '50px' 
        : `${props.rounding}px`
    };

    width: ${(props: any) => props.width == 'default' ? '88px' : `${props.width}em` };
    height: ${(props: any) => props.height == 'default' ? '48px' : `${props.height}em` };
    border: none;

    :hover {
        box-shadow:  ${(props: any) => 
            props.color == 'default' ? '0px 0px 10px #F06232'
            : props.color == 'blueIce' && '0px 0px 10px #45B3FF'
        };
    }
`