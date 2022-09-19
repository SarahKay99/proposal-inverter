import React from "react"
import { 
    LabelWrapper, 
    LabelNameWrapper, 
    QuestionMarkIcon, 
    CharLimitWrapper 
} from './index.style'

interface LabelProps {
    labelName: string
    numberOfCharacters?: number
    questionMarkText?: string
    charLimit?: number
    subtext?: string
}

function Label({
    labelName,
    questionMarkText,
    charLimit,
    numberOfCharacters,
    subtext
}: LabelProps) {
    return <LabelWrapper>
        <div className={"flexBox"}>
            <div className={"label"}>
                <LabelNameWrapper>{labelName}</LabelNameWrapper>
                
                {/* Info about the box: directly beside the label */}
                {questionMarkText && (
                    <QuestionMarkIcon>
                        <img src={"question-mark.png"} />
                    <div className="infoBubble">{questionMarkText}</div>
                    </QuestionMarkIcon>
                )}
            </div>

            {/* Character limit: On the Far Right */}
            {charLimit && (
                <CharLimitWrapper tooManyChars={numberOfCharacters > charLimit}>
                    {numberOfCharacters} / {charLimit}
                </CharLimitWrapper>
            )}
        </div>

        {/* Subtext: under the label */}
        <span className="subtext">{subtext}</span>
    </LabelWrapper>
}

export default Label;