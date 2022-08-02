import React from "react";
import CharLimit from "./CharLimit";
import { LabelWrapper, TextWrapper, QuestionMarkIcon, InfoBubble } from './Label.style';

interface LabelProps {
    text: String
    questionMarkText?: String
    charLimit?: Number
}

function Label({
    text,
    questionMarkText,
    charLimit,
}: LabelProps) {
    return <LabelWrapper>
        <TextWrapper>{text}</TextWrapper>

        {/* Question Mark Icon: Directly next to the text */}
        {questionMarkText && (
            <QuestionMarkIcon>
                <InfoBubble>{questionMarkText}</InfoBubble>
            </QuestionMarkIcon>
        )}

        {/* Character limit: On the Far Right */}
        {charLimit && (
            <CharLimit />
        )}
    </LabelWrapper>
}

export default Label;