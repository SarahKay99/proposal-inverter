import React from "react";
import Button from "../Button/Button";
import { 
    ProposalCard, 
    Status,
    TitleWrapper,
    TextWrapper,
    BottomBarWrapper,
    DAOWrapper
} from "./Card.style";

interface CardsProps {
    proposalTitle: string;
    proposalText: string;
    status: 'New Proposal' | 'Needs Contributors' | 'Inactive' | 'Needs Funding';
    daoName: string;
    daoIcon?: any;
}

function Card({
    proposalTitle,
    proposalText,
    status,
    daoIcon,
    daoName
}: CardsProps) {
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
                />
            </BottomBarWrapper>
        </ProposalCard>
    )
}

export default Card;