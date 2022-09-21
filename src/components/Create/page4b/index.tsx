import { placeholderQuestions } from "../../../@context/placeholders"
import React, { useState } from "react"
import FundingPartnersQuestions from "src/components/@shared/FundingPartnersQuestions"
import { PageWrapper, Page4Specs, BottomText } from "../shared.style"
import { FundingPartnersQuestionsWrapper } from "./index.style"

export default function Page4b() {
    const [answeredQuestions, setAnsweredQuestions] = useState<any[]>([])

    return (
        <PageWrapper>
            <Page4Specs>
                <h1>Just a bit more information</h1>
                <p>Our registered partners have a few more questions to fill out to become eligible for funding. Read and answer the questions for each partner you're sending your proposal to.</p>

                <FundingPartnersQuestionsWrapper>
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
                </FundingPartnersQuestionsWrapper>
            
                <BottomText headerColor={placeholderQuestions.length - answeredQuestions.length > 0 ? 'pumpkin' : 'default'}>
                    <h3 className="questionsAnswered">You are missing {placeholderQuestions.length - answeredQuestions.length} questions.</h3>
                    <p>Click 'Proceed' once you have completed the questionnaires. Or answer them later in your "My Activities" page.</p>
                </BottomText>

            </Page4Specs>
        </PageWrapper>
    )
}