import React, { useState } from "react";
import Button from "../Button/Button";
import CardStatus from "../CardStatus";
import InputField from "../InputField";
import { 
    FundingPartnersQuestionsWrapper,
    TitleAndSummary,
    VisitApplication,
    QuestionsDropdown
} from "./index.style";

interface FundingPartnersQuestionsProps {
    title: string
    grantGenre: string
    summary: string
    questions: Question[]
    showQuestionsAnswered?: boolean
}

export interface Question {
    question: string
    placeholder?: string
    extraInfo?: string
    helperText?: string
    charLimit?: number
}

function FundingPartnersQuestions({
    title,
    grantGenre,
    summary,
    questions=[],
    showQuestionsAnswered=false
}: FundingPartnersQuestionsProps) {
    const [dropdownSelected, setDropdownSelected] = useState<boolean>(false);
    const [answeredQuestions, setAnsweredQuestions] = useState<any[]>([]);

    const toggleDropdown = (e: any) => {
        setDropdownSelected(!dropdownSelected)
    }
    
    return questions.length > 0 && <FundingPartnersQuestionsWrapper
        selected={dropdownSelected}
        showQuestionsAnswered={showQuestionsAnswered}
        noQuestionsLeft={(questions.length - answeredQuestions.length) == 0}
    >
        <TitleAndSummary className="padding">
            <CardStatus status={grantGenre} />
            <h1>{title}</h1>
            {summary}
        </TitleAndSummary>

        <VisitApplication className="padding" noQuestionsLeft={(questions.length - answeredQuestions.length) == 0}>
            {showQuestionsAnswered ? (
                <>
                    <div>
                        <span className="questionQuantity">{questions.length} Questions</span>
                        <span className="questionStatus">
                            {(questions.length - answeredQuestions.length == 0) ? (
                                "Answered Questions"
                            ) : (
                                "Unanswered Questions"
                            )}
                        </span>
                    </div>
                    
                    <button onClick={(e) => {toggleDropdown(e)}} className="blankButton">
                        {dropdownSelected ? <img src="upward-arrow.png" /> : <img src="downward-arrow.png" />}
                    </button>
                </>
            ) : (
                <>
                    <a className="visitApp">Visit Application</a>
                    <button onClick={(e) => {toggleDropdown(e)}} className="blankButton">
                        {dropdownSelected ? <img src="upward-arrow.png" /> : <img src="downward-arrow.png" />}
                    </button>
                </>
            )}
        </VisitApplication>

        {dropdownSelected && <QuestionsDropdown className="padding">
            <>
            {questions.map((question: Question, idx: number) => {
                return <InputField 
                    margin={"0em 0em 1em 0em"}
                    inputType="textArea"
                    placeholder={question.placeholder}
                    labelName={question.question}
                    questionMarkText={question.extraInfo}
                    charLimit={question.charLimit}
                    helperText={question.helperText}
                />
            })}
            <Button 
                margin={"0em 0em 2em 0em"}
                text="Save"
                onClick={{}}
                textColor="white"
                color="blueIce"
                hover="blueIce"
            />
            </>
        </QuestionsDropdown>}
    </FundingPartnersQuestionsWrapper>
}

export default FundingPartnersQuestions;