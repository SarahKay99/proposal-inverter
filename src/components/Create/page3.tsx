import { Milestone } from "@context/_types";
import React, { useState } from "react"
import { 
    Page3Fonts,
    MilestoneHeading,
    AddAMilestone,
    AddedMilestones,
    MilestoneRoadmapSummary,
} from "./index.style"
import { 
    PageWrapper, 
    TextSummary,
    TextLine 
} from './shared.style'

export default function Page3() {

    const [milestones, setMilestones] = useState<Milestone[]>();

    return (
        <PageWrapper>
            <Page3Fonts>
                <MilestoneHeading>
                    <h1>What are your proposal milestones?</h1>
                    <div>Milestones let everyone viewing your proposal stay updated on its progress. This is a critical step to keep your Funders in the loop, and to potentially attract new Funders as well.</div>
                    <hr />
                </MilestoneHeading>

                <h2>Add a Milestone</h2>
                <AddAMilestone>
                </AddAMilestone>

                <h2>Added Milestones</h2>  
                {milestones && milestones.map((milestones: any) => {
                    return <AddedMilestones>
                        
                    </AddedMilestones>
                })}

                <h2>Milestone Roadmap Summary</h2>
                <TextSummary>
                    <TextLine>
                        <h3>Period: </h3> 20/07/23 - 20/03/24
                        <span className="days">(250 Days)</span>
                    </TextLine>
                    
                    <TextLine>
                        <h3>Total Milestones: </h3> 8
                    </TextLine>
                    
                    <TextLine>
                        <h3>Total Funding: </h3>
                    </TextLine>
                </TextSummary> 
                <MilestoneRoadmapSummary>
                    
                </MilestoneRoadmapSummary>
            </Page3Fonts>
            
        </PageWrapper>
    )
}