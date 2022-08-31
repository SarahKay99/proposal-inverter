import React from "react"
import Button from "src/components/@shared/Button/Button"
import InverterOffer from "src/components/@shared/InverterOffers"
import { 
    HomePageWrapper, 
    HomePageTitle, 
    HomePageSubtitle, 
    CreateProposalButtons,
    VisitApp,
    InverterOffers,
    GetFundedByTheBest,
    ProposalsToFund,
    ReadOurBlog
} from "./index.style"

export default function Home() {
    return (
        <HomePageWrapper>
            <HomePageTitle>
                Propose, Fund and <span>Buidl</span>.
            </HomePageTitle>
            <HomePageSubtitle>
                A funding mechanism where contributors come first.
            </HomePageSubtitle>

            <CreateProposalButtons>
                <Button 
                    text="Create a Proposal" 
                    color={"blueIce"} 
                    hover={"blueIce"}
                    width={160}
                    height={40}
                    sizeType="px"
                    onClick={(e: any) => {e.preventDefault()}}
                    textColor={'white'}
                />
                <a>Fund Proposals</a>
            </CreateProposalButtons>

            <VisitApp>
                <h3>Why Invert Your Proposals?</h3>
                <Button 
                    text="Visit App" 
                    color="blueIce" 
                    hover="blueIce"
                    textColor="white"
                    height={40}
                    sizeType="px"
                    onClick={(e: any) => {e.preventDefault()}}
                />
            </VisitApp>

            <InverterOffers>
                <h1>Inverter Offers</h1>
                <InverterOffer 
                    title={"Streamed"} 
                    subtitle={"little story about the title and more"} 
                    imgAddress={""} 
                />
                <InverterOffer 
                    title={"Focused"} 
                    subtitle={"little story about the title and more"} 
                    imgAddress={""} 
                />
                <InverterOffer 
                    title={"Accountability"} 
                    subtitle={"little story about the title and more"} 
                    imgAddress={""} 
                />
            </InverterOffers>

            <GetFundedByTheBest>
                <h4>OUR SUPPORTED FUNDING PARTNERS.</h4>
                <h1>Get Funded By The Best</h1>
                <Button 
                    text="Become A Funder" 
                    color="blueIce" 
                    hover="blueIce"
                    textColor="white"
                    width={160}
                    height={40}
                    sizeType="px"
                    onClick={(e: any) => {e.preventDefault()}}
                />
            </GetFundedByTheBest>

            <ProposalsToFund>
                <h3>Proposals In Need of Funding</h3>
                <Button 
                    text="View All Proposals" 
                    color="blueIce" 
                    hover="blueIce"
                    textColor="white"
                    width={160}
                    height={40}
                    sizeType="px"
                    onClick={(e: any) => {e.preventDefault()}}
                />
            </ProposalsToFund>

            <ReadOurBlog>

            </ReadOurBlog>

        </HomePageWrapper>
    )
}