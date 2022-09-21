import React from "react"
import { CategoryMenuWrapper } from "./index.style"

interface CategoryMenuProps {
    options: string[]
}

function CategoryMenu(
    {options}: CategoryMenuProps
) {
    return <CategoryMenuWrapper>
        {options.map((option: string, idx: number) => {
            return <button key={idx.toString()} className="option">
                {option}
            </button>
        })}
    </CategoryMenuWrapper>
}

export default CategoryMenu;