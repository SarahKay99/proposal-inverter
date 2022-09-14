import React from "react"
import { Milestone } from "@context/_types";
import { MilestoneWrapper } from "./index.style";


export interface MilestoneProps {
    milestone: Milestone
}

function Milestone({milestone}: MilestoneProps) {
    return (
        <MilestoneWrapper>
            
        </MilestoneWrapper>
    )
}

export default Milestone