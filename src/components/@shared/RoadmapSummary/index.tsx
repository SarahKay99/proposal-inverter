import { Milestone } from "@context/_types"
import React from "react"
import { RoadmapSummaryWrapper, RoadmapTile } from "./index.style"

interface RoadmapSummaryProps {
    milestones: Milestone[]
    margin?: string
}

function RoadmapSummary({milestones, margin}: RoadmapSummaryProps) {
    const calculateMilestoneTime = (milestoneIndexToCalculate: number, milestones: Milestone[]) => {
        return "Milestone Time"
    }
    
    return <RoadmapSummaryWrapper margin={margin} milestones={milestones.length > 0}>
        <>
        <div className="textSummary">
            <span className="flexSpan">
                <b>Period</b> 
                <span>
                    20/07/23 - 20/07/24 
                    <span className="daysFont">(250 Days)</span>
                </span>
            </span>
            <span className="flexSpan"><b>Total Milestones</b> {milestones.length}</span>
            <span className="flexSpan"><b>Total Funding</b> 200.000 USDC</span> 
        </div>
        <div className="milestones">
            {milestones.length > 0 ? milestones.map((milestone: Milestone, idx: number) => {
                return <RoadmapTile start={idx == 0}>
                    <span className="milestoneTime">{idx >= 1 ? `${calculateMilestoneTime(idx, milestones)}` : "Minimum Funding"}</span>
                    <span className="fundingAmount">{milestone.fundingAmount} {milestone.fundingCurrency}</span>
                    <span className="milestoneText">
                        {idx > 1 ? 
                            `Phase ${idx}`
                        : 
                            "Start Phase"
                        }
                    </span>
                </RoadmapTile>
            }) : <span className="none">Please add some milestones before proceeding.</span>}
        </div>
        </>
    </RoadmapSummaryWrapper>
}

export default RoadmapSummary