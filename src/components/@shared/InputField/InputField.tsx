import React, { useEffect } from "react";
import { useState } from "react";
import { 
    InputFieldWrapper, 
    LabelNameWrapper,
    InputWrapper, 
    QuestionMarkIcon, 
    CharLimitWrapper,
    HelperTextWrapper,
    DropdownFieldWrapper
} from './InputField.style';
import YesNoButton from "../YesNoButton/YesNoButton";
import Button, { ButtonProps } from "../Button/Button";

interface TextInputProps {
    inputType: 'label' | 'textArea' | 'dropdown' | 'yesNo' | 'button'
    labelName?: string
    placeholder?: string

    dropdownOptions?: string[]
    dropdownType?: 'singleOption' | 'multipleOptions'
    dropdownStyle?: 'plain' | 'checkbox'

    helperText?: string
    questionMarkText?: string

    charLimit?: number
    color?: "default" | "blueIce"

    buttonProps?: ButtonProps
    fieldWidth?: number | "default",
    fieldHeight?: number | "default",

    height?: number | "default"
    width?: number | "default"
    margin?: string
}

function TextInputField({
    inputType,
    labelName,
    placeholder,

    dropdownOptions,
    dropdownType='singleOption',
    dropdownStyle='plain',

    helperText='',
    questionMarkText,

    charLimit,
    color="default",
    buttonProps,

    fieldHeight='default', 
    fieldWidth='default',

    height='default',
    width='default',
    margin='default'
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

    return <InputFieldWrapper margin={margin} height={height} width={width}>
        {labelName && (
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
        )}

        <InputWrapper 
            state={errorState}
            fieldHeight={fieldHeight}
            fieldWidth={fieldWidth}
            buttonWidth={buttonProps?.width}
            buttonHeight={buttonProps?.height}
        >
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
            ) : inputType == 'yesNo' ? (
                <YesNoButton 
                    color={color}
                />
            ) : inputType == 'button' && (
                <Button 
                    text={buttonProps?.text}
                    onClick={buttonProps?.onClick}
                    rounding={buttonProps?.rounding}
                    color={buttonProps?.color}
                    border={buttonProps?.border}
                    width={buttonProps?.width}
                    height={buttonProps?.height}
                    sizeType={buttonProps?.sizeType}
                    hover={buttonProps?.hover}
                    textColor={buttonProps?.textColor}
                    fontWeight={buttonProps?.fontWeight}
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

    </InputFieldWrapper>
}

export default TextInputField;