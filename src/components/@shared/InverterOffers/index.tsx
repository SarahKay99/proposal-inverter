import React from "react"
import { InverterOfferWrapper } from "./index.style"

interface InverterOffersProps {
    title: string
    subtitle: string
    imgAddress: string
}

function InverterOffer({
    title,
    subtitle,
    imgAddress
}: InverterOffersProps) {
    return (
        <InverterOfferWrapper>
            <img src={imgAddress} />
            <h3 className="title">{title}</h3>
            <h5 className="subtitle">{subtitle}</h5>
        </InverterOfferWrapper>
    )
}

export default InverterOffer