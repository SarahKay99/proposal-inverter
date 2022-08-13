import React from "react";
import { useState } from "react";
import { 
    LabelWrapper, 
    LabelNameWrapper,
    InputWrapper, 
    QuestionMarkIcon, 
    CharLimitWrapper,
    HelperTextWrapper,
    DropdownInputFieldStyled
} from './InputField.style';

interface TextInputProps {
    inputType: 'label' | 'textArea' | 'dropdown'
    labelName: string
    placeholder: string

    dropdownOptions?: string[]
    helperText?: string
    questionMarkText?: string

    charLimit?: number
}

function TextInputField({
    inputType,
    labelName,
    placeholder,

    dropdownOptions,
    helperText,
    questionMarkText,

    charLimit,
}: TextInputProps) {

    const [numberOfCharacters, setNumberOfCharacters] = useState(0);

    const countCharacters = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        setNumberOfCharacters(e.target.value.length);
    }

    return <LabelWrapper>
        <div className={"topLine"}>
            <div className={"flexBox"}>
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

        <InputWrapper>
            {inputType == 'label' ? (
                <input
                    type="text"
                    placeholder={placeholder}
                    onChange={(e) => countCharacters(e)}
                />
            ) : inputType == 'textArea' ? (
                <textarea 
                    placeholder={placeholder}
                    onChange={(e) => countCharacters(e)}
                />
            ) : inputType == 'dropdown' && (
                <DropdownInputFieldStyled>
                    {dropdownOptions.map((option: any) => {
                        return <option>{option}</option>
                    })}
                </DropdownInputFieldStyled>
            )}

        </InputWrapper>

        {helperText && (
            <HelperTextWrapper>
                {/* show the regular helper text if there's no charLimit */}
                {(charLimit == undefined) ? <>{helperText}</>
                : (charLimit != undefined) && <>
                    {numberOfCharacters > charLimit ? <>
                        <span className={"errorText"}>Your input is too long.</span>
                    </> : <>
                        <span>{helperText}</span>
                    </>}
                </>}
            </HelperTextWrapper>
        )}

    </LabelWrapper>
}

export default TextInputField;