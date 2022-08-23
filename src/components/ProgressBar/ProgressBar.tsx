import React from "react";
import { ProgressBarWrapper, ProgressBarLine, ProgressBarNumber, ProgressBarText, ProgressBarItem } from "./ProgressBar.style";

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
            <>
                <ProgressBarLine />
                {pages.map((page: string, idx: number) => {
                    return <ProgressBarItem>
                        <ProgressBarNumber activePage={currentPageNumber == idx + 1}>
                            {currentPageNumber < idx + 1 ? 
                                <img src="tick.png"/>
                            : (idx + 1)}
                        </ProgressBarNumber>
                        <ProgressBarText activePage={currentPageNumber == idx + 1}>
                            {page}
                        </ProgressBarText>
                    </ProgressBarItem>
                })}
            </>
        </ProgressBarWrapper>
    )
}

export default ProgressBar;