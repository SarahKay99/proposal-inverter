import styled from "styled-components";

export const ButtonWrapper = styled.button<{
    rounding: 'default' | 'round' | number, 
    color: 'default' | 'blueIce' | 'none',
    border: 'default' | 'blueIce' | 'indigo' | 'none',
    width: 'default' | 'fill-available' | number,
    height: 'default' | number,
    sizeType: 'em' | 'px',
    hover: 'default' | 'blueIce' | 'indigo' | 'none',
    textColor: 'default' | 'white' | 'blue' | 'babyBlue',
    fontWeight: 'default' | number,
    margin: string
}>`
    margin: ${(props: any) => props.margin == 'default' ? "0vw 0vw 0vw 0vw" : props.margin};
    font-weight: ${(props: any) => props.fontWeight == 'default' ? 700 : props.fontWeight};
    color: ${(props: any) => props.textColor == 'default' ? 'black' 
        : props.textColor == 'white' ? 'white'
        : props.textColor == 'blue' ? 'var(--brand-ocean-blue)'
        : props.textColor == 'babyBlue' && 'var(--brand-baby-blue)'};
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

    width: ${(props: any) => (props.width != 'default' && props.width != 'fill-available') ? `${props.width}${props.sizeType} !important` 
        : props.width == 'default' ? '88px' 
        : props.width == 'fill-available' && '-webkit-fill-available'};
    width: ${(props: any) => (props.width != 'default' && props.width != 'fill-available') ? `${props.width}${props.sizeType} !important` 
        : props.width == 'default' ? '88px' 
        : props.width == 'fill-available' && '-moz-available'};
    height: ${(props: any) => props.height == 'default' ? '48px' : `${props.height}${props.sizeType}` };
    
    border: ${(props: any) => props.border == 'none' ? 'none' 
        : (props.border == 'indigo') ? 'solid var(--brand-indigo) 3px'
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
            : props.hover == 'indigo' ? "var(--brand-indigo)"
            : props.hover == 'default' ? "var(--brand-purple-haze-gradient)"
            : props.hover == 'none' && "none"
        };
        cursor: pointer;
    }
`