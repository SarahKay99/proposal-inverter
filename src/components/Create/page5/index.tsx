import React from "react"
import Label from "../../@shared/Label"
import { PageWrapper } from "../shared.style"
import { Page5Specs, DetailField } from "./index.style"

const placeholderProposal = {
    title: "Proposal Title",
    summary: "Lorem ipsum dolor sit amet, qui falli iuvaret an, dicat omnesque vulputate sed no, odio diam volumus eam ne. Wisi lucilius pertinax mea ea, duo maiorum ancillae ea, ne summo essent minimum eum. Soluta altera no mei. Inani accusamus an pro, dico delectus argumentum usu cu movet ceteros salutandi an pro.",
    detailedExplanation: "Lorem ipsum dolor sit amet, qui falli iuvaret an, dicat omnesque vulputate sed no,odio diam volumus eam ne. Wisi lucilius pertinax mea ea, duo maiorum ancillae ea, ne summo essent minimum eum. Soluta altera no mei. Inani accusamus an pro, dico delectus argumentum usu cu movet ceteros salutandi an pro. Lorem ipsum dolor sit amet, qui falli iuvaret an, dicat omnesque vulputate sed no,odio diam volumus eam ne. Wisi lucilius pertinax mea ea, duo maiorum ancillae ea, ne summo essent minimum eum. Soluta altera no mei. Inani accusamus an pro, dico delectus argumentum usu cu movet ceteros salutandi an pro.Lorem ipsum dolor sit amet, qui falli iuvaret an, dicat omnesque vulputate sed no,odio diam volumus eam ne. Wisi lucilius pertinax mea ea, duo maiorum ancillae ea, ne summo essent minimum eum. Soluta altera no mei. Inani accusamus an pro, dico delectus argumentum usu cu movet ceteros salutandi an pro.",
    creator: "zero.eth",
    contributors: [
        "one.eth",
        "Two.eth",
        "three.eth",
        "four.eth",
        "five.eth"
    ]
}

export default function Page5() {
    return (
        <PageWrapper>
            <Page5Specs>
                <h1>Review Your Proposal</h1>
                <hr />

                <DetailField>
                    <Label labelName="Title"/>
                    <p className="font">{placeholderProposal.title}</p>
                </DetailField>
                
                <DetailField>
                    <Label labelName="Summary"/>
                    <p className="font">{placeholderProposal.summary}</p>
                </DetailField>

                <DetailField>
                    <Label labelName="Detailed Explanation" />
                    <p className="font">{placeholderProposal.detailedExplanation}</p>
                </DetailField>

                <DetailField>
                    <Label
                        labelName="Milestones"
                        questionMarkText="Milestones with deliverables."
                    />
                </DetailField>

                <DetailField>
                    <Label
                        labelName="Funding Application(s)"
                        questionMarkText="Milestones with deliverables."
                    />
                </DetailField>

                <DetailField>
                    <Label
                        labelName="Creator"
                        questionMarkText="Milestones with deliverables."
                    />
                    <p className="font">{placeholderProposal.creator}</p>
                </DetailField>

                <DetailField>
                    <Label
                        labelName="Contributors"
                        questionMarkText="Milestones with deliverables."
                    />
                    <ol>
                        {placeholderProposal.contributors.map((contributor: string, idx: number) => {
                            return <li className="font">{contributor}</li>
                        })}
                    </ol>
                </DetailField>

            </Page5Specs>
        </PageWrapper>
    )
}