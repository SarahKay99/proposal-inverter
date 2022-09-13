import React, { useState } from "react"
import Member, { MemberProps } from "../../@shared/Member";
import {  
    ProposalWorking, 
    ProposalFunding,
    CreateMemberForm,
    RecipientWalletForm 
} from "./index.style"
import { PageWrapper, InfoField } from "../shared.style"

export default function Page2() {
    const [members, setMembers] = useState<MemberProps[]>([]);

    return (
        <PageWrapper>

            <h1>Who will work on this proposal?</h1>
            <hr />
            <ProposalWorking>
                <InfoField>
                    <h2>Add Members</h2>
                    <p>Tell us about who is creating this proposal. Provide some basic info so your funders and contributors know who you are.</p>
                    <p>You'll need to make a few on-chain decisions as your proposal progresses. Make sure the wallet address you provide is reasonably accessible to yourself.</p>
                </InfoField>

                <CreateMemberForm>

                </CreateMemberForm>
                
                {members.map((member: MemberProps) => 
                    <Member 
                        name={member.name}
                        role={member.role}
                        walletAddress={member.walletAddress}
                        twitterHandle={member.twitterHandle}
                    />
                )}

            </ProposalWorking>

            <h1>Where will the funding go?</h1>
            <hr />
            <ProposalFunding>
                <InfoField>
                    <h2>Add a receiving wallet address</h2>
                    <p>Provide some details about your proposal. Your potential funders and contributors need to know what you're trying to accomplish!</p>
                </InfoField>

                <RecipientWalletForm>

                </RecipientWalletForm>
            </ProposalFunding>

        </PageWrapper>
    )
}