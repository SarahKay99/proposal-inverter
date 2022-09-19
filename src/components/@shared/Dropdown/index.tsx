import React, { useState } from "react"
import Button from "../Button/Button"
import { DropdownFieldWrapper } from './index.style'

interface DropdownProps {
    dropdownSelected: boolean
    placeholder: string
    dropdownType: 'singleOption' | 'multipleOptions'
    dropdownOptions: string[] 
    dropdownSelectedOption: string
    dropdownSelectedOptions: string[]
    backgroundColorDropdown: 'light' | 'dark'
    toggleDropdown: (e: any) => void
    selectOption: (e: any, option: string) => void
    addOptionOfficially: (e: any) => void
    width: 'default' | number
}

function Dropdown({
    dropdownSelected,
    placeholder,
    dropdownType,
    dropdownOptions,
    dropdownSelectedOption,
    dropdownSelectedOptions,
    backgroundColorDropdown,
    toggleDropdown,
    selectOption,
    addOptionOfficially,
    width='default'
}: DropdownProps) {

    return <DropdownFieldWrapper selected={dropdownSelected} width={width} backgroundColorDropdown={backgroundColorDropdown}>
        <button 
            className="selectButton"
            onClick={(e) => toggleDropdown(e)}
        >
            <>
            {(dropdownSelectedOption == undefined || (dropdownSelectedOption == '' && (dropdownSelectedOptions.length == 0 || dropdownSelectedOptions == undefined))) ? (
                <>{placeholder}</>
            ) : dropdownSelectedOption != '' ? (
                <>{dropdownSelectedOption}</>
            ) : (dropdownSelectedOptions.length != 0) && (
                <>
                {dropdownSelectedOptions.map((option: string, idx: any) => {
                    return (
                        <>
                            {(idx == dropdownSelectedOptions.length - 1) ? `${option}` : `${option}, `}
                        </>
                    )
                })}
                </>
            )}
            <img src={dropdownSelected ? "dropdown-arrow-up.png" : "dropdown-arrow-down.png"}/>
            </>
        </button>

        {dropdownOptions != undefined && (
            <div className="scrolling">
                <ul>
                    {dropdownOptions.map((option: any) => {
                        return <li key={option} value={option}>
                            <button key={option} onClick={(e) => selectOption(e, option)}>
                                {/* readonly checkbox. */}
                                {/* We need to create an overlay to show the blue color of the checkbox. */}
                                {dropdownType == 'multipleOptions' && (
                                    <input 
                                        type="checkbox" 
                                        checked={dropdownSelectedOptions.includes(option)}
                                        onChange={(e) => {console.log(e)}}
                                        disabled
                                    />
                                )}
                                {option}
                            </button>
                        </li>
                    })}
                </ul>
                <hr />
                {dropdownType == 'multipleOptions' && 
                    <div className="buttons">
                        <Button 
                            text="Cancel"
                            onClick={toggleDropdown}
                            color="none"
                            hover="blueIce"
                            textColor="blue"
                            width={6}
                            sizeType={"em"}
                        />
                        <Button 
                            text="Add"
                            onClick={addOptionOfficially}
                            color="blueIce"
                            hover="blueIce"
                            textColor="white"
                            width={6}
                            sizeType={"em"}
                        />
                    </div>
                }
            </div>
        )}
    </DropdownFieldWrapper>
}

export default Dropdown;