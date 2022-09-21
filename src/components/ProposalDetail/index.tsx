import React from "react"
import CategoryMenu from "../@shared/CategoryMenu"
import SocialMediaLinks from "../@shared/SocialMediaLinks"
import { ProposalDetailWrapper } from "./index.style"

export default function ProposalDetail() {
    return <ProposalDetailWrapper>
        <a>Return to home</a>
        <h1>Proposal Title</h1>
        <SocialMediaLinks links={["Website", "Discord", "Twitter"]}/>
        <CategoryMenu options={["Overview", "Proposal Pool", "Funding Applications", "Contributors"]}/>
    </ProposalDetailWrapper>
}