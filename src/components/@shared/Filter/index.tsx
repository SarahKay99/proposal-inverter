import React from "react"
import { FilterWrapper } from "./index.style"

interface FilterProps {

}

function Filter({}: FilterProps) {
    const showOptions = (e: any) => {

    }

    return <FilterWrapper>
        <button className="filter" onClick={(e) => showOptions(e)}>
            All Filters
            <img src="filter.png"/>
        </button>
    </FilterWrapper>
}

export default Filter;