import React, { useState } from "react"
import Button from "../@shared/Button/Button";
import ProgressBar from "../@shared/ProgressBar/ProgressBar";
import { CreatePageWrapper, ButtonsWrapper } from './index.style';
import Page1 from "./page1";
import Page2 from "./page2";
import Page3 from "./page3";
import Page5 from "./page5";
import { useNavigate } from "react-router-dom";
import Congratulations from "./Congratulations";
import Page4a from "./page4a";
import Page4b from "./page4b";


export default function Create() {
    const [pageNumber, setPageNumber] = useState(1);
    const navigate = useNavigate();

    const pageBack = (e: any) => {
        if (pageNumber > 1) setPageNumber(pageNumber - 1);
        else if (pageNumber == 1) navigate('/');
        else console.log("FATAL ERROR: cannot move page back. pageNumber isn't 1.");
    }

    const pageForward = (e: any) => {
        if (pageNumber < 6) setPageNumber(pageNumber + 1);
        else if (pageNumber == 6) setPageNumber(0);
        else console.log("FATAL ERROR: cannot move page forward. pageNumber is undefined or > 6.");
    }

    // PLACEHOLDER
    const saveAsDraft = (e: any) => {
        console.log("Saving as draft");
    }

    const SetCurrentPageNumber = (pageNumber: number) => {
        setPageNumber(pageNumber)
    }
    
    return (
        <CreatePageWrapper>
            <div className="progressBarWrapper">
                <ProgressBar 
                    currentPageNumber={pageNumber}
                    pages={[
                        {progressName: "Proposal", pageNumbers: [1]}, 
                        {progressName: "Contributors", pageNumbers: [2]},
                        {progressName: "Milestones", pageNumbers: [3]}, 
                        {progressName: "Funders", pageNumbers: [4, 5]}, 
                        {progressName: "Review", pageNumbers: [6]}
                    ]}
                    setCurrentPageNumber={SetCurrentPageNumber}
                />
            </div>

            {pageNumber == 1 ? 
                <Page1 /> 
            : pageNumber == 2 ?
                <Page2 />
            : pageNumber == 3 ?
                <Page3 />
            : pageNumber == 4 ?
                <Page4a />
            : pageNumber == 5 ?
                <Page4b /> 
            : pageNumber == 6 ? 
                <Page5 />
            : pageNumber == 0 && 
                <Congratulations />
            }

            <ButtonsWrapper pageNo={pageNumber}>
                    {((pageNumber >= 1 && pageNumber <= 3) || pageNumber == 6) ? (
                        <>
                        {/* First three pages + Page 5 */}
                        <div className="buttons">
                            <Button
                                text={(pageNumber > 1) ? "Previous" : "Return"}
                                onClick={pageBack}
                                color={"none"}
                                hover={"blueIce"}
                                height={40}
                                sizeType={"px"}
                                border={"blueIce"}
                                textColor={"white"}
                                margin={"0vw 5vw 0vw 0vw"}
                            />
                            <Button 
                                text={(pageNumber < 6) ? "Proceed" : "Submit"}
                                onClick={pageForward}
                                color={"blueIce"}
                                hover={"blueIce"}
                                height={40}
                                sizeType={"px"}
                                border={"blueIce"}
                                textColor={"white"}
                            />
                        </div>

                        <a className="link" onClick={(e) => saveAsDraft(e)}>SAVE AS A DRAFT</a>
                        </>
                    ) : (pageNumber >= 4 && pageNumber <= 5) && (
                        <>
                            {/* Page 4a and Page 4b */}
                            <div className="buttonsPage4">
                                <Button 
                                    text={"Previous"}
                                    onClick={pageBack}
                                    color={"none"}
                                    hover={"blueIce"}
                                    height={40}
                                    sizeType={"px"}
                                    border={"blueIce"}
                                    textColor={"white"}
                                    margin={"0vw 0.2vw 0vw 0.2vw"}
                                    width={"fill-available"}
                                />
                                <Button 
                                    text={"Proceed"}
                                    onClick={pageForward}
                                    color={"blueIce"}
                                    hover={"blueIce"}
                                    height={40}
                                    sizeType={"px"}
                                    border={"blueIce"}
                                    textColor={"white"}
                                    margin={"0vw 0.2vw 0vw 0.2vw"}
                                    width={"fill-available"}
                                />
                                <Button 
                                    text={(pageNumber == 4) ? "Skip Features" : "Answer Later"}
                                    onClick={pageForward}
                                    color={"none"}
                                    hover={"indigo"}
                                    height={40}
                                    sizeType={"px"}
                                    border={"indigo"}
                                    textColor={"white"}
                                    margin={"0vw 0.2vw 0vw 0.2vw"}
                                    width={"fill-available"}
                                />
                            </div>
                        </>
                    )}
                   
            </ButtonsWrapper>
        </CreatePageWrapper>

    )
}