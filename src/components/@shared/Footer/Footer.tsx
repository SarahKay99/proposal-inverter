import React from "react";
import SocialMediaButton from "../SocialMediaButton/SocialMediaButton";
import { FooterWrapper } from './Footer.style';

interface FooterProps {
    isHomePage: boolean
}

function Footer({isHomePage}: FooterProps) {
    return <FooterWrapper isHomePage={isHomePage}>
        <div className="col side">
            LOGO

            <span className="name">Name</span>
            <span className="oneLiner">One liner of product</span>
        </div>

        <div className="col">
            <span className="colTitle">Brand Name</span>
            <a>All Proposals</a>
            <a>Create Proposal</a>
            <a>Fund</a>
            <a>My Activities</a>
        </div>

        <div className="col">
            <span className="colTitle">Policies</span>
            <a>Privacy</a>
            <a>Terms</a>
        </div>

        <div className="col">
            <span className="colTitle">Resources</span>
            <a>Support</a>
            <a>Documentation</a>
        </div>

        <div className="col">
            <span className="colTitle followUs">Follow us on</span>
            <SocialMediaButton site="telegram" />
        </div>

    </FooterWrapper>
}

export default Footer;