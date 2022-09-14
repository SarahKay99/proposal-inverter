import React from "react"
import { DateMonthYearWrapper, DateMonthYearField } from "./index.style"

interface DateMonthYearWrapper {
    showUseCurrentDate?: boolean
}

function DateMonthYear({showUseCurrentDate=true}: DateMonthYearWrapper) {
    return <DateMonthYearWrapper>
        <DateMonthYearField>
            <input type="text" placeholder="XX" className="dateField" id="date"/>
            <span className="slash">/</span>
            <input type="text" placeholder="XX" className="dateField" id="month"/>
            <span className="slash">/</span>
            <input type="text" placeholder="2022" className="dateField" id="year"/>
        </DateMonthYearField>

        {showUseCurrentDate && <a className="link">Use current date (CET)</a>}
    </DateMonthYearWrapper>
}

export default DateMonthYear