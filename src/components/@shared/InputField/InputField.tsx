import React, { useEffect } from "react";
import { useState } from "react";
import { 
    LabelWrapper, 
    LabelNameWrapper,
    InputWrapper, 
    QuestionMarkIcon, 
    CharLimitWrapper,
    HelperTextWrapper,
    DropdownFieldWrapper
} from './InputField.style';
import YesNoButton from "../YesNoButton/YesNoButton";

interface TextInputProps {
    inputType: 'label' | 'textArea' | 'dropdown' | 'yesNo'
    labelName: string
    placeholder?: string

    dropdownOptions?: string[]
    helperText?: string
    questionMarkText?: string

    charLimit?: number
    color?: "default" | "blueIce"
}

function TextInputField({
    inputType,
    labelName,
    placeholder,

    dropdownOptions,
    helperText='',
    questionMarkText,

    charLimit,
    color="default"
}: TextInputProps) {

    const [numberOfCharacters, setNumberOfCharacters] = useState<number>(0);
    const [errorState, setErrorState] = useState<'normal' | 'error' | 'warning'>('normal');
    
    // Dropdown Only
    const [dropdownSelected, setDropdownSelected] = useState(false);
    const [dropdownSelectedOption, setDropdownSelectedOption] = useState<string>('');

    const countCharacters = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        setNumberOfCharacters(e.target.value.length);
        if (charLimit != undefined) {
            if (numberOfCharacters > charLimit) setErrorState('error');
            else setErrorState('normal');
        }
    }

    const toggleDropdown = (e: any) => {
        e.preventDefault();
        setDropdownSelected(!dropdownSelected);
    }
    
    const selectOption = (e: any, option: string) => {
        e.preventDefault();
        setDropdownSelectedOption(option);
        setDropdownSelected(!dropdownSelected);
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

        <InputWrapper state={errorState}>
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
            ) : inputType == 'dropdown' ? (
                // since the <option> element cannot be styled in Chrome, we've made our own custom dropdown.
                <DropdownFieldWrapper selected={dropdownSelected}>
                    <button 
                        className="selectButton"
                        onClick={(e) => toggleDropdown(e)}
                    >
                        <>
                        {(dropdownSelectedOption == undefined || dropdownSelectedOption == '') ? (
                            <>{placeholder}</>
                        ) : (
                            <>{dropdownSelectedOption}</>
                        )}
                        <img src={dropdownSelected ? "dropdown-arrow-up.png" : "dropdown-arrow-down.png"}/>
                        </>
                    </button>

                    {dropdownOptions != undefined && (
                        <ul>
                            {dropdownOptions.map((option: any) => {
                                return <li key={option} value={option}>
                                    <button 
                                        onClick={(e) => selectOption(e, option)
                                    }>{option}</button>
                                </li>
                            })}
                        </ul>
                    )}
                </DropdownFieldWrapper>
            ) : inputType == 'yesNo' && (
                <YesNoButton 
                    color={color}
                />
            )}

        </InputWrapper>

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

    </LabelWrapper>
}

export default TextInputField;