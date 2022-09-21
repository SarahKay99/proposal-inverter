import React, { useEffect } from "react";
import { useState } from "react";
import { 
    InputFieldWrapper, 
    InputWrapper,
    HelperTextWrapper,
} from './index.style';
import YesNoButton from "../YesNoButton/YesNoButton";
import Button, { ButtonProps } from "../Button/Button";
import Label from "../Label";
import Dropdown from "../Dropdown";
import CoinAmountInput from "../CoinAmountInput";
import DateMonthYear from "../DateMonthYear";
import TimeSelector from "../TimeSelector";

interface TextInputProps {
    inputType: 'label' | 'textArea' | 'dropdown' | 'yesNo' | 'button' | 'coinAmount' | 'dateMonthYear' | 'dateMonthYearStartEnd' | 'timeSelector'
    labelName?: string
    placeholder?: string
    subtext?: string

    dropdownOptions?: string[]
    dropdownType?: 'singleOption' | 'multipleOptions'
    dropdownStyle?: 'plain' | 'checkbox'
    maxOptionsSelected?: number;
    backgroundColorDropdown?: 'light' | 'dark';

    defaultCoin?: string

    showUseCurrentDate?: boolean

    helperText?: string
    questionMarkText?: string

    charLimit?: number
    color?: "default" | "blueIce"

    buttonProps?: ButtonProps
    fieldWidth?: number | "default" | "fill-available",
    fieldHeight?: number | "default",

    height?: number | "default"
    width?: number | "default"
    margin?: string
}

function TextInputField({
    inputType,
    labelName,
    placeholder,
    subtext,

    dropdownOptions,
    dropdownType='singleOption',
    dropdownStyle='plain',
    maxOptionsSelected,
    backgroundColorDropdown,

    defaultCoin,
    
    showUseCurrentDate,

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

    // dropdown
    const [dropdownSelected, setDropdownSelected] = useState<boolean>();
    const [dropdownSelectedOption, setDropdownSelectedOption] = useState<string>('');
    const [dropdownSelectedOptions, setDropdownSelectedOptions] = useState<string[]>([]);
    const [tooManyOptionsWarningActive, setTooManyOptionsWarningActive] = useState<boolean>(false);

    const [numberOfCharacters, setNumberOfCharacters] = useState<number>(0);
    const [errorState, setErrorState] = useState<'normal' | 'error' | 'warning'>('normal');
    
    const toggleDropdown = (e: any) => {
        e.preventDefault();
        setDropdownSelected(!dropdownSelected);
    }

    const selectOption = (e: any, option: string) => {
        e.preventDefault();
        if (dropdownType == 'singleOption') {
            setDropdownSelectedOption(option);
            setDropdownSelected(!dropdownSelected);
        } else {
            if (dropdownSelectedOptions.includes(option)) {
                setDropdownSelectedOptions(existing => existing.filter(item => item !== option));
                setTooManyOptionsWarningActive(false)
            } else if (!dropdownSelectedOptions.includes(option) && dropdownSelectedOptions.length < maxOptionsSelected) {
                setDropdownSelectedOptions(existing => [...existing, option]);
            } else if (!dropdownSelectedOptions.includes(option) && dropdownSelectedOptions.length == maxOptionsSelected) {
                setTooManyOptionsWarningActive(true)
            }
        }
    }

    const addOptionOfficially = (e: any) => {

    }

    const countCharacters = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        setNumberOfCharacters(e.target.value.length);
        if (charLimit != undefined) {
            if (numberOfCharacters > charLimit) setErrorState('error');
            else setErrorState('normal');
        }
    }

    return <InputFieldWrapper margin={margin} height={height} width={width}>
        {labelName && (
            <Label 
                labelName={labelName}
                numberOfCharacters={numberOfCharacters}
                questionMarkText={questionMarkText}
                charLimit={charLimit}
                subtext={subtext}
            />
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
                <Dropdown 
                    dropdownSelected={dropdownSelected}
                    placeholder={placeholder}
                    dropdownType={dropdownType}
                    dropdownOptions={dropdownOptions}
                    dropdownSelectedOption={dropdownSelectedOption}
                    dropdownSelectedOptions={dropdownSelectedOptions}
                    backgroundColorDropdown={backgroundColorDropdown}
                    toggleDropdown={toggleDropdown}
                    selectOption={selectOption}
                    addOptionOfficially={addOptionOfficially}
                    width={width}
                />
            ) : inputType == 'yesNo' ? (
                <YesNoButton 
                    color={color}
                />
            ) : inputType == 'button' ? (
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
            ) : inputType == 'coinAmount' ? (
                <CoinAmountInput
                    placeholder={placeholder}
                    defaultCoin={defaultCoin}
                />
            ) : inputType == 'dateMonthYear' ? (
                <DateMonthYear showUseCurrentDate={showUseCurrentDate} />
            ) : inputType == 'dateMonthYearStartEnd' ? (
                <div className="duration">
                    <div className="start">
                        <span className="durationLabel">Start</span>
                        <DateMonthYear showUseCurrentDate={showUseCurrentDate} />
                    </div>

                    <div className="end">
                        <span className="durationLabel">End</span>
                        <DateMonthYear showUseCurrentDate={false} />
                    </div>
                </div>
            ) : inputType == 'timeSelector' && (
                <TimeSelector />
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

            {(dropdownType == "singleOption") ? <>{helperText}</> 
            : (dropdownType == "multipleOptions" && <>
                {dropdownSelectedOptions.length > maxOptionsSelected ? <>
                    <span className={"errorText"}>You have selected too many options. Please select a maximum of {maxOptionsSelected}.</span>
                </> : tooManyOptionsWarningActive ? <>
                    <span className={"warningText"}>You are only allowed to select {maxOptionsSelected} options.</span>
                </> : <>
                    <span>{helperText}</span>
                </>} 
            </>)
            }
        </HelperTextWrapper>

    </InputFieldWrapper>
}

export default TextInputField;