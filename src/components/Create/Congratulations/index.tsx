import React from "react"
import Button from "../../@shared/Button/Button"
import { CongratulationsWrapper, CongratulationsBox } from "./index.style"

export default function Congratulations() {
    const shareProposal = (e: any) => {
        console.log("ADD FUNCTIONALITY");
    }

    const fundProposal = (e: any) => {
        console.log("ADD FUNCTIONALITY");
    }

    const viewProposal = (e: any) => {
        console.log("ADD FUNCTIONALITY");
    }
    
    return (
        <CongratulationsWrapper>
            <CongratulationsBox>
                <h1>Congratulations. Your Proposal is Live!</h1>
                
                <div className="text">
                    Your proposal is now publicly viewable on the platform. Your proposal can now receive Funding.
                </div>
                
                <div className="shareProposal">
                    <Button 
                        text="Share Proposal"
                        onClick={shareProposal}
                        color={"blueIce"}
                        hover={"blueIce"}
                        width={160}
                        height={40}
                        sizeType="px"
                        textColor="white"
                    />
                </div>
                
                <div className="buttonsFlexBox">
                    <Button 
                        text="Fund Your Proposal"
                        onClick={fundProposal}
                        color={"none"}
                        hover={"none"}
                        border={"blueIce"}
                        width={160}
                        height={40}
                        sizeType="px"
                        textColor="white"
                    />
                    <Button 
                        text="View Proposal"
                        onClick={viewProposal}
                        color={"none"}
                        hover={"none"}
                        border={"blueIce"}
                        width={160}
                        height={40}
                        sizeType="px"
                        textColor="white"
                    />
                </div>

            </CongratulationsBox>
        </CongratulationsWrapper>
    )
}