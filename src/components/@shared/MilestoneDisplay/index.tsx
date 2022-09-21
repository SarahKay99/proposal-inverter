import React from "react"
import { Milestone } from "@context/_types";
import { MilestoneWrapper } from "./index.style";
import Button from "../Button/Button";


export interface MilestoneDisplayProps {
    milestone: Milestone
}

function MilestoneDisplay({milestone}: MilestoneDisplayProps) {
    const editMilestone = (e: any) => {
        console.log("EDIT MILESTONE HERE");
    }

    const removeMilestone = (e: any) => {
        console.log("REMOVE MILESTONE")
    }

    return (
        <MilestoneWrapper>
            <div className="firstColumn">
                <h2>{milestone.title}</h2>
                <h3 className="deliverables">Deliverables</h3>

                <ol>
                    {milestone.deliverables.map((deliverable: string, idx: number) => {
                        return <li className="font">
                            {idx + 1}. {deliverable}
                        </li>
                    })}                    
                </ol>

                <h3>Work Duration</h3>
                <div className="dateFlex">
                    <span className="date font">Start date: {milestone.startDate}</span>
                    <span className="date font">End date: {milestone.endDate}</span>
                </div>

                <div className="buttons">
                    <Button 
                        margin={"0em 3em 0em 0em"}
                        text="Edit"
                        onClick={editMilestone}
                        border="blueIce"
                        color="none"
                        hover="blueIce"
                        textColor="white"
                        height={3}
                        width={5}
                    />

                    <Button 
                        text="Remove"
                        onClick={removeMilestone}
                        border="none"
                        color="none"
                        hover="blueIce"
                        textColor="white"
                        height={3}
                        width={5}
                    />
                </div>
            </div>

            <div className="secondColumn">
                <h3>Necessary Funding Amount</h3>
                <span className="fundingAmount">{milestone.fundingAmount}</span>
                <div className="currencyDisplay">
                    <img src="USDC.png"/>
                    <span className="currency">{milestone.fundingCurrency}</span>
                </div>
                
            </div>
        </MilestoneWrapper>
    )
}

export default MilestoneDisplay