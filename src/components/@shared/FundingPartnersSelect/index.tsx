import React from "react";
import Button from "../Button/Button";
import CardStatus from "../CardStatus";
import Label from "../Label";
import { FundingPartnersSelectWrapper } from "./index.style";

interface FundingPartnersSelectProps {
    grantGenre: string
    title: string
    summary: string
    grantSuccessRate: string
    grantPoolQuantity: number
    grantPoolCurrency: string
    maxAllocationQuantity: number
    maxAllocationCurrency: string

    selected: boolean
    selectThisGrant: (FundingPartners: any) => void
}

function FundingPartnersSelect({
    grantGenre,
    title,
    summary,
    grantSuccessRate,
    grantPoolQuantity,
    grantPoolCurrency,
    maxAllocationQuantity,
    maxAllocationCurrency,

    selected,
    selectThisGrant
}: FundingPartnersSelectProps) {
    return <FundingPartnersSelectWrapper>
        <div className="alignRight">
            <CardStatus status={grantGenre}/>
        </div>
        
        <div className="header">
            <h1>{title}</h1>
            <span className="">{summary}</span>
        </div>

        <div className="labelDiv">
            <Label labelName={"Grant Success Rate: "} />
            {grantSuccessRate}
        </div>

        <div className="labelDiv">
            <Label labelName={"Grant Pool for Inverter Projects: "} />
            {grantPoolQuantity} {grantPoolCurrency}
        </div>

        <div className="labelDiv">
            <Label labelName={"Max Allocation for Projects: "} />
            {maxAllocationCurrency} {maxAllocationQuantity}
        </div>

        <Button
            text="Select"
            textColor="white"
            color="blueIce"
            onClick={selectThisGrant}
            width="fill-available"
            margin={"3vh 0vh 0vh 0vh"}
        />
    </FundingPartnersSelectWrapper>
}

export default FundingPartnersSelect;