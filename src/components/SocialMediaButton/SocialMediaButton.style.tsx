import styled from "styled-components";

// https://nikitahl.com/gradient-border-css#:~:text=To%20show%20gradients%20for%20a,to%20actually%20show%20border%20gradient.
// for reference later

export const SocialMediaButtonWrapper = styled.button`
    padding: 5px;
    background: none;
    height: 30px;
    width: 30px;

    border-radius: 10px;
    border: solid 1.5px;
    border-image: var(--brand-blue-ice-gradient) 1;

    img {
        height: 15px;
        width: auto;
    }

    :hover {
        background: var(--brand-blue-ice-gradient);
    }
`