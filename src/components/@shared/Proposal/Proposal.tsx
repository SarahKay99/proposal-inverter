import React from "react";
import Button from "../Button/Button";
import { 
    ProposalCard, 
    Status,
    TitleWrapper,
    TextWrapper,
    BottomBarWrapper,
    DAOWrapper
} from "./Proposal.style";

interface ProposalProps {
    proposalTitle: string;
    proposalText: string;
    status: 'New Proposal' | 'Needs Contributors' | 'Inactive' | 'Needs Funding';
    daoName: string;
    daoIcon?: any;
}

function Proposal({
    proposalTitle,
    proposalText,
    status,
    daoIcon,
    daoName
}: ProposalProps) {
    return (
        <ProposalCard>
            <Status className={"StatusText"} status={status}>{status}</Status>
            <TitleWrapper className="CardHeader">{proposalTitle}</TitleWrapper>
            <TextWrapper className="CardTextBody">{proposalText}</TextWrapper>
            <BottomBarWrapper>
                <DAOWrapper className={"DAONameText"}>
                    <img src={daoIcon} />
                    {daoName}
                </DAOWrapper>
                <Button
                    text={"View"}
                    onClick={() => {}}
                    rounding={"round"}
                    color={"blueIce"}
                    hover={"blueIce"}
                    textColor={"white"}
                />
            </BottomBarWrapper>
        </ProposalCard>
    )
}

export default Proposal;