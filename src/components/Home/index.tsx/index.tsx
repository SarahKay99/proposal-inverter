import React from "react"
import Blogpost from "src/components/@shared/Blogpost/Blogpost"
import Button from "src/components/@shared/Button/Button"
import FundingPartners from "src/components/@shared/FundingPartners"
import InverterOffer from "src/components/@shared/InverterOffers"
import Proposal from "src/components/@shared/Proposal/Proposal"
import { 
    HomePageWrapper, 
    HomePageTitle, 
    HomePageSubtitle, 
    CreateProposalButtons,
    InverterOffers,
    GetFundedByTheBest,
    ProposalsToFund,
    ReadOurBlog
} from "./index.style"

const blogposts = [
    {
        title: "Proposal Inverter-The next stage in DAO2DAO Coordination",
        date: "July 4th, 2022",
        icon: "blogposts/shroom.png",
        link: ""
    },
    {
        title: "Proposal Inverter-The next stage in DAO2DAO Coordination",
        date: "July 4th, 2022",
        icon: "blogposts/splash.png",
        link: ""
    },
    {
        title: "Proposal Inverter-The next stage in DAO2DAO Coordination",
        date: "July 4th, 2022",
        icon: "blogposts/shroom.png",
        link: ""
    }
]

const proposals = [
    {
        proposalTitle: "The next Gitcoin Round",
        proposalText: "We are GitcoinDAO and we want to fund GR 20 to continue funding public goods.  Lets fund the future of web3 together. Regen above Degen friends.",
        status: 'New Proposal',
        daoIcon: "",
        daoName: "myDao"
    },
    {
        proposalTitle: "The next Gitcoin Round",
        proposalText: "We are GitcoinDAO and we want to fund GR 20 to continue funding public goods.  Lets fund the future of web3 together. Regen above Degen friends.",
        status: 'New Proposal',
        daoIcon: "",
        daoName: "myDao"
    },
    {
        proposalTitle: "The next Gitcoin Round",
        proposalText: "We are GitcoinDAO and we want to fund GR 20 to continue funding public goods.  Lets fund the future of web3 together. Regen above Degen friends.",
        status: 'New Proposal',
        daoIcon: "",
        daoName: ""
    }
]

const fundingPartners = [
    {
        title: "Celo Foundation",
        link: "",
        icon: "fundingPartners/celo.png"
    },
    {
        title: "LabDAO",
        link: "",
        icon: "fundingPartners/labDao.png"
    },
    {
        title: "ETH Foundation",
        link: "",
        icon: "fundingPartners/ethFoundation.png"
    }
]

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
                    text="Become a Funding Partner" 
                    color={"blueIce"} 
                    hover={"blueIce"}
                    width={200}
                    height={40}
                    sizeType="px"
                    onClick={(e: any) => {e.preventDefault()}}
                    textColor={'white'}
                />
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
                <Button 
                    text="Fund Proposals" 
                    color={"none"} 
                    hover={"none"}
                    border={"blueIce"}
                    width={160}
                    height={40}
                    sizeType="px"
                    onClick={(e: any) => {e.preventDefault()}}
                    textColor={'white'}
                />
            </CreateProposalButtons>

            <InverterOffers>
                <h1>Inverter Offers</h1>
                <div className="inverterOffersFlexBox">
                    <InverterOffer 
                        title={"Streamed"} 
                        subtitle={"little story about the title and more"} 
                        imgAddress={"streamed.png"} 
                    />
                    <InverterOffer 
                        title={"Focused"} 
                        subtitle={"little story about the title and more"} 
                        imgAddress={"focused.png"} 
                    />
                    <InverterOffer 
                        title={"Accountability"} 
                        subtitle={"little story about the title and more"} 
                        imgAddress={"accountability.png"} 
                    />
                </div>
            </InverterOffers>

            <GetFundedByTheBest>
                <h4>OUR SUPPORTED FUNDING PARTNERS.</h4>
                <h1>Get Funded By The Best</h1>

                <div className="fundingPartnersFlexBox">
                    {fundingPartners.map((fundingPartner: any) => {
                        return <FundingPartners 
                            icon={fundingPartner.icon}
                            title={fundingPartner.title}
                            websiteLink={fundingPartner.websiteLink}
                        />
                    })}
                </div>

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
                <h4>SUPPORT YOUR FAVORITE PROJECTS</h4>
                <h1>Fund Proposals</h1>

                <div className="proposalsToFundFlexBox">
                    {proposals.map((proposal: any) => {
                        return <Proposal 
                            proposalTitle={proposal.proposalTitle}
                            proposalText={proposal.proposalText}
                            status={proposal.status}
                            daoIcon={proposal.daoIcon}
                            daoName={proposal.daoName}
                        />
                    })}
                </div>
                
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
                <h2>Read Our Blog</h2>

                <div className="blogpostsFlexBox">
                    {blogposts.map((blogpost: any) => {
                        return <Blogpost 
                            title={blogpost.title}
                            date={blogpost.date}
                            icon={blogpost.icon}
                            link={blogpost.link}
                        />
                    })}
                </div>
            </ReadOurBlog>

        </HomePageWrapper>
    )
}