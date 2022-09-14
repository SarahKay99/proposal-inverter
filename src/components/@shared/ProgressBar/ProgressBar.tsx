import React from "react";
import { ProgressBarWrapper, ProgressBarNumber, ProgressBarText, ProgressBarItem } from "./ProgressBar.style";

interface ProgressPage {
    progressName: string
    pageNumbers: number[]
}

interface ProgressBarProps {
    currentPageNumber: number
    pages: ProgressPage[]
}

function ProgressBar({
    currentPageNumber,
    pages
}: ProgressBarProps) {
    return (
        <ProgressBarWrapper>
            {pages.map((page: ProgressPage, idx: number) => {
                return (<>
                    <ProgressBarItem key={page.progressName}>
                        <ProgressBarNumber activePage={page.pageNumbers.includes(currentPageNumber)}>
                            {(currentPageNumber > Math.max.apply(0, page.pageNumbers) || currentPageNumber == 0) ? 
                                <img src="tick.svg"/>
                            : (idx + 1)}
                        </ProgressBarNumber>
                        <ProgressBarText activePage={currentPageNumber == idx + 1}>
                            {page.progressName}
                        </ProgressBarText>
                        
                    </ProgressBarItem>
                    {idx + 1 < pages.length && <hr />}
                    </>
                )
            })}
        </ProgressBarWrapper>
    )
}

export default ProgressBar;