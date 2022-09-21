import React from "react"
import { FundingPartnersWrapper } from "./index.style"

interface FundingPartnersProps {
    icon: string
    title: string
    websiteLink: string
}

function FundingPartners({
    icon, 
    title, 
    websiteLink
}: FundingPartnersProps) {
    return <FundingPartnersWrapper>
        <img src={icon} />
        <div className="titleAndLink">
            <span className="title">{title}</span>
            <a className="fundingPartnerLink" href={websiteLink} target="_blank">Visit Website ↗</a>
        </div>
        
    </FundingPartnersWrapper>
}

export default FundingPartners;