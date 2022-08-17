import React from "react";
import { SocialMediaButtonWrapper } from './SocialMediaButton.style';

interface SocialMediaButtonProps {
    site: string
}

function SocialMediaButton({site}: SocialMediaButtonProps) {
    return site == "telegram" && <SocialMediaButtonWrapper>
        <img src="telegram.png" />
    </SocialMediaButtonWrapper>
}

export default SocialMediaButton;