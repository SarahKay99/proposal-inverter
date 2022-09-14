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
    toggleDropdown,
    selectOption,
    addOptionOfficially,
    width='default'
}: DropdownProps) {

    return <DropdownFieldWrapper selected={dropdownSelected} width={width}>
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
            <div className="scrolling">
                <ul>
                    {dropdownOptions.map((option: any) => {
                        return <li key={option} value={option}>
                            <button onClick={(e) => selectOption(e, option)}>
                                {dropdownType == 'multipleOptions' && (
                                    <input 
                                        type="checkbox" 
                                        checked={dropdownSelectedOptions.includes(option)}
                                        onChange={(e) => {console.log(e)}}
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
                            textColor="blue"
                            height={35}
                            sizeType={"px"}
                        />
                        <Button 
                            text="Add"
                            onClick={addOptionOfficially}
                            color="blueIce"
                            textColor="white"
                            height={35}
                            sizeType={"px"}
                        />
                    </div>
                }
            </div>
        )}
    </DropdownFieldWrapper>
}

export default Dropdown;