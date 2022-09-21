import { Milestone } from "../../../@context/_types";
import React, { useEffect, useState } from "react"
import RoadmapSummary from "../../@shared/RoadmapSummary";
import { AddMilestoneFormWrapper, AddedMilestones, NoMilestoneYet, Page3Fonts, MilestoneHeading } from "./index.style"
import { 
    PageWrapper,
    TextSummary,
    TextLine
} from '../shared.style'
import InputField from "src/components/@shared/InputField";
import Label from "src/components/@shared/Label";
import Button from "src/components/@shared/Button/Button";
import MilestoneDisplay from "src/components/@shared/MilestoneDisplay";
import { milestonesPlaceholder } from "../../../@context/placeholders";

export default function Page3() {

    const [milestones, setMilestones] = useState<Milestone[]>([]);
    const [deliverables, setDeliverables] = useState<string[]>([]);

    const addMilestone = (e: any) => {
        
    }

    const addNewDeliverable = (e: any) => {
        setDeliverables(existing => [...existing, ""])
    }

    useEffect(() => {
        console.log("Deliverable added.")
    }, [deliverables.length])

    return (
        <PageWrapper>
            <Page3Fonts>
                <MilestoneHeading>
                    <h1>What are your proposal milestones?</h1>
                    <hr />
                    <div className="pageSubtext">Milestones let everyone viewing your proposal stay updated on its progress. This is a critical step to keep your Funders in the loop, and to potentially attract new Funders as well.</div>
                </MilestoneHeading>

                <h2>Add a Milestone</h2>
                <AddMilestoneFormWrapper>
                    <div className="firstColumn">
                        <InputField 
                            inputType="label"
                            labelName="Milestone title"
                            placeholder="Web3 Market Research"
                        />

                        <div className="estimatedDuration">
                            <InputField 
                                labelName="Estimated Milestone Duration"
                                inputType="timeSelector"
                                subtext="NOTE: Milestones(s) start once the previous milestone is completed."
                            />
                        </div>

                        <InputField 
                            inputType="coinAmount"
                            placeholder="10.000"
                            defaultCoin="USDC"
                            labelName="Necessary Funding"
                            subtext="Please add the amount of funds you need to complete this milestone."
                        />

                        <div className="buttons">
                            <Button 
                                text="Add Milestone"
                                onClick={addMilestone}
                                color="blueIce"
                                textColor="default"
                                width={12}
                                height={2.8}
                                sizeType={"em"}
                                hover={"blueIce"}
                            />
                            <a className="clearFields" onClick={(e) => {}}>Clear Fields</a>
                        </div>
                    </div>
                    <div className="secondColumn">
                        <Label labelName="Deliverables" questionMarkText="Enter your deliverables here."/>

                        <div className="deliverable">
                            <Label labelName="1." />
                            <InputField 
                                inputType="label"
                                placeholder="Collect data"
                            />
                        </div>

                        {deliverables.length > 0 && deliverables.map((deliverable: string, idx: number) => {
                            return <div className="deliverable">
                                <Label labelName={`${idx + 2}.`} />
                                <InputField 
                                    inputType="label"
                                    placeholder="Collect data"
                                />
                            </div>
                        })}

                        <Button 
                            margin={"15px 0px 0px 0px"}
                            text="+ Add New Deliverable"
                            onClick={addNewDeliverable}
                            color="none"
                            border="blueIce"
                            textColor="white"
                            width={14}
                            height={2.6}
                            sizeType="em"
                            hover="blueIce"
                        />
                    </div>
                    
                </AddMilestoneFormWrapper>

                <h2>Added Milestones</h2>  
                {milestonesPlaceholder.length > 0 ? milestonesPlaceholder.map((milestone: Milestone, idx: number) => {
                    return <AddedMilestones>
                        <span className="number">{idx + 1}</span>
                        <MilestoneDisplay milestone={milestone}/>                        
                    </AddedMilestones>
                }) : <NoMilestoneYet>You haven't added any milestones yet.</NoMilestoneYet>}

                <h2>Milestone Roadmap Summary</h2>
                {/* TODO: Add this commented code to the RoadmapSummary element as an alternative display */}
                {/* <TextSummary>
                    <TextLine>
                        <h3>Period: </h3> 20/07/23 - 20/03/24
                        <span className="days">(250 Days)</span>
                    </TextLine>
                    
                    <TextLine>
                        <h3>Total Milestones: </h3> 8
                    </TextLine>
                    
                    <TextLine>
                        <h3>Total Funding: </h3> 200.000 USDC
                    </TextLine>
                </TextSummary>  */}

                <RoadmapSummary margin={"20px 0px 70px 0px"} milestones={milestonesPlaceholder} />
                
            </Page3Fonts>
            
        </PageWrapper>
    )
}