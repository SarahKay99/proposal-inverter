import { Milestone } from "@context/_types"
import React from "react"
import { RoadmapSummaryWrapper, RoadmapTile } from "./index.style"

interface RoadmapSummaryProps {
    milestones: Milestone[]
}

function RoadmapSummary({milestones}: RoadmapSummaryProps) {
    const calculateMilestoneTime = (milestoneIndexToCalculate: number, milestones: Milestone[]) => {

    }
    
    return <RoadmapSummaryWrapper>
        <>
        {milestones.map((milestone: Milestone, idx: number) => {
            return <RoadmapTile start={idx == 0}>
                {idx > 1 ? `${calculateMilestoneTime(idx, milestones)}` : "Minimum Funding"}
                <span className="fundingAmount">{milestone.fundingAmount}</span>
                <span className="milestoneText">
                    {idx > 1 ? 
                        `Phase ${idx}`
                    : 
                        "Start Phase"
                    }
                </span>
            </RoadmapTile>
        })}
        </>
    </RoadmapSummaryWrapper>
}

export default RoadmapSummary