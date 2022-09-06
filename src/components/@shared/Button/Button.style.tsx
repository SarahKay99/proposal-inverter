import { PropsWithChildren } from "react";
import styled from "styled-components";

export const ButtonWrapper = styled.button<{
    rounding: 'default' | 'round' | number, 
    color: 'default' | 'blueIce' | 'none',
    border: 'default' | 'blueIce' | 'none',
    width: 'default' | number,
    height: 'default' | number,
    sizeType: 'em' | 'px',
    hover: 'default' | 'blueIce' | 'none',
    textColor: 'default' | 'white',
    fontWeight: 'default' | number
}>`
    font-weight: ${(props: any) => props.fontWeight == 'default' ? 700 : props.fontWeight};
    color: ${(props: any) => props.textColor == 'default' ? 'black' : 'white'};
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

    width: ${(props: any) => props.width == 'default' ? '88px' : `${props.width}${props.sizeType}` };
    height: ${(props: any) => props.height == 'default' ? '48px' : `${props.height}${props.sizeType}` };
    
    border: ${(props: any) => props.border == 'none' ? 'none' 
        : (props.border == 'default' || props.border == 'blueIce') && "solid 3px"};
    border-image: ${(props: any) => 
        props.border == 'blueIce' ? "var(--brand-blue-ice-gradient) 1"
        : props.border == 'default' ? "var(--brand-purple-haze-gradient) 1"
        : props.border == 'none' && "none"};
    

    :hover {
        box-shadow:  ${(props: any) => 
            props.color == 'default' ? '0px 0px 10px #F06232'
            : props.color == 'blueIce' && '0px 0px 10px #45B3FF'
        };
        background: ${(props: any) => 
            props.hover == 'blueIce' ? "var(--brand-blue-ice-gradient)"
            : props.hover == 'default' ? "var(--brand-purple-haze-gradient)"
            : props.hover == 'none' && "none"
        }};
        cursor: pointer;
    }
`