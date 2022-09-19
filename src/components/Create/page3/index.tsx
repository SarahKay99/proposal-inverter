import { Milestone } from "@context/_types";
import React, { useEffect, useState } from "react"
import RoadmapSummary from "../../@shared/RoadmapSummary";
import { 
    Page3Fonts,
    MilestoneHeading,
} from "../index.style"
import { AddMilestoneFormWrapper, AddedMilestones, NoMilestoneYet } from "./index.style"
import { 
    PageWrapper,
    TextSummary,
    TextLine
} from '../shared.style'
import InputField from "src/components/@shared/InputField";
import Label from "src/components/@shared/Label";
import Button from "src/components/@shared/Button/Button";
import MilestoneDisplay from "src/components/@shared/MilestoneDisplay";

const milestonesPlaceholder = [
    {
        title: "Milestone 1",
        deliverables: [
            "blah skjdhdjkgkjdfgkj sdkjgsdjkgkjsdgk jsdkjgsdk jgkjs dgkjsdkj enfg irjg erjkewhjer hgkerkjg kjerkrekjger", 
            "Blah", 
            "blah"
        ],
        startDate: "26/10/2023",
        endDate: "26/10/2024",
        fundingAmount: "200000.00",
        fundingCurrency: "USDC"
    },
    {
        title: "Milestone 2",
        deliverables: ["blah", "Blah", "blah"],
        startDate: "22/07/2023",
        endDate: "22/07/2024",
        fundingAmount: "10000.00",
        fundingCurrency: "USDC"
    }
    
]



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
                    <div className="pageSubtext">Milestones let everyone viewing your proposal stay updated on its progress. This is a critical step to keep your Funders in the loop, and to potentially attract new Funders as well.</div>
                    <hr />
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
                            <Label labelName="Estimated Duration"/>
                            <div className="duration">
                                <div className="start">
                                    <span className="durationLabel">Start</span>
                                    <InputField 
                                        inputType="dateMonthYear"
                                    />
                                </div>

                                <div className="end">
                                    <span className="durationLabel">End</span>
                                    <InputField 
                                        inputType="dateMonthYear"
                                        showUseCurrentDate={false}
                                    />
                                </div>
                                
                            </div>
                        </div>

                        <InputField 
                            inputType="coinAmount"
                            placeholder="10.000"
                            defaultCoin="USDC"
                            labelName="Necessary Funding for Completion of Milestone"
                            subtext="For this milestone, we need:"
                        />

                        <div className="buttons">
                            <Button 
                                text="Add Milestone"
                                onClick={addMilestone}
                                color="blueIce"
                                textColor="white"
                                width={14}
                                height={2.6}
                                sizeType={"em"}
                                hover={"blueIce"}
                            />
                            <a onClick={(e) => {}}>Clear Fields</a>
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
                <TextSummary>
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
                </TextSummary> 

                <RoadmapSummary margin={"20px 0px 70px 0px"} milestones={milestonesPlaceholder} />
                
            </Page3Fonts>
            
        </PageWrapper>
    )
}