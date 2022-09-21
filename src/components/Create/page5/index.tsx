import { milestonesPlaceholder, placeholderProposal, placeholderQuestions } from "../../../@context/placeholders"
import React from "react"
import FundingPartnersQuestions from "src/components/@shared/FundingPartnersQuestions"
import Label from "../../@shared/Label"
import { PageWrapper } from "../shared.style"
import { Page5Specs, DetailField } from "./index.style"
import RoadmapSummary from "src/components/@shared/RoadmapSummary"

const labelsStyle = {fontSize: "22px", color: 'white', fontWeight: 700}

export default function Page5() {
    return (
        <PageWrapper>
            <Page5Specs>
                <h1>Review Your Proposal</h1>
                <hr />

                <div className="indent">
                    <DetailField>
                        <Label 
                            labelName="Proposal Creator Address" 
                            style={labelsStyle}
                        />
                        <p className="font">{placeholderProposal.creatorAddress}</p>
                    </DetailField>

                    <DetailField>
                        <Label 
                            labelName="Proposal Title" 
                            style={labelsStyle}
                        />
                        <p className="font">{placeholderProposal.title}</p>
                    </DetailField>
                    
                    <DetailField>
                        <Label 
                            labelName="Short Description" 
                            style={labelsStyle}
                        />
                        <p className="font">{placeholderProposal.summary}</p>
                    </DetailField>

                    <DetailField>
                        <Label 
                            labelName="Long Description" 
                            style={labelsStyle} 
                        />
                        <p className="font">{placeholderProposal.detailedExplanation}</p>
                    </DetailField>

                    <DetailField>
                        <Label
                            labelName="Contributor(s)"
                            questionMarkText="List of all the contributors."
                            style={labelsStyle}
                        />
                        <ol>
                            {placeholderProposal.contributors.map((contributor: string, idx: number) => {
                                return <li className="font">{contributor}</li>
                            })}
                        </ol>
                    </DetailField>

                    <DetailField>
                        <Label
                            labelName="Funding receiving address"
                            questionMarkText="Funding receiving address"
                            style={labelsStyle}
                        />
                        <p className="font">{placeholderProposal.receivingAddress}</p>
                    </DetailField>

                    <DetailField>
                        <Label
                            labelName="Funding Application(s)"
                            questionMarkText="Milestones with deliverables."
                            style={labelsStyle}
                        />
                        <p className="font"><b>Total Applications:</b> {placeholderQuestions.length}</p>
                        <p className="font">You can always answer the required questions later in the "My Activity" page.</p>
                        {placeholderQuestions.map((placeholderQuestion: any, idx: number) => {
                            return <FundingPartnersQuestions 
                                key={idx.toString()}
                                title={placeholderQuestion.title}
                                grantGenre={placeholderQuestion.grantGenre}
                                summary={placeholderQuestion.summary}
                                questions={placeholderQuestion.questions}
                                showQuestionsAnswered={true}
                            />
                        })}
                    </DetailField>

                    <DetailField>
                        <Label
                            labelName="Milestone Roadmap / Summary"
                            questionMarkText="Milestones with deliverables."
                            style={labelsStyle}
                        />
                        <p className="font">Here is a short summary of all the milestones you have created for this proposal.</p>
                        <RoadmapSummary margin={"20px 0px 70px 0px"} milestones={milestonesPlaceholder} />
                    </DetailField>
                </div>
            </Page5Specs>
        </PageWrapper>
    )
}