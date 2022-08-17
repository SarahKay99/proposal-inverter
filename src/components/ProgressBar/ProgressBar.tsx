import React from "react";
import { ProgressBarWrapper } from "./ProgressBar.style";

interface ProgressBarProps {
    currentPageNumber: number
    pages: string[]
}

function ProgressBar({
    currentPageNumber,
    pages
}: ProgressBarProps) {
    return (
        <ProgressBarWrapper>
            
        </ProgressBarWrapper>
    )
}

export default ProgressBar;