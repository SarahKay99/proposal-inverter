import React, { useState } from 'react'
import { TimeSelectorWrapper } from './index.style'

function TimeSelector() {
    const [showingDropdown, setShowingDropdown] = useState<boolean>(false);
    const [selectedOption, setSelectedOption] = useState<string>("Day(s)");
    
    const toggleDropdown = (e: any) => {
        e.preventDefault();
        setShowingDropdown(!showingDropdown);
    }

    const selectOption = (e: any, option: string) => {
        e.preventDefault();
        setSelectedOption(option);
        setShowingDropdown(!showingDropdown);
    }

    return <TimeSelectorWrapper>
        <div className="flexBox">
            <input 
                type="text"
                placeholder="2"
                className="inputField"
            />
            <button className="dropdownButton" onClick={(e) => toggleDropdown(e)}>{selectedOption}</button>
        </div>
        {showingDropdown && (
            <ul>
                <li><button onClick={(e) => selectOption(e, "Day(s)")}>Day(s)</button></li>
                <li><button onClick={(e) => selectOption(e, "Week(s)")}>Week(s)</button></li>
                <li><button onClick={(e) => selectOption(e, "Month(s)")}>Month(s)</button></li>
                <li><button onClick={(e) => selectOption(e, "Year(s)")}>Year(s)</button></li>
            </ul>
        )}
    </TimeSelectorWrapper>
}

export default TimeSelector;