import React, { useState } from "react"
import Member, { MemberProps } from "../../@shared/Member"
import {  
    Page2Specs,
    ProposalWorking, 
    ProposalFunding,
    CreateMemberForm,
    ReceipientWalletForm,
    TokenForm
} from "./index.style"
import { PageWrapper, InfoField } from "../shared.style"
import Button from "../../@shared/Button/Button"
import InputField from "../../@shared/InputField"
import TokenButton from "src/components/@shared/TokenButton"

export default function Page2() {
    const [savedMembers, setSavedMembers] = useState<MemberProps[]>([]);
    const [currentMember, setCurrentMember] = useState<MemberProps>()
    const [showingWalletEntryForm, setShowingWalletEntryForm] = useState<boolean>(false);

    const toggleWalletEntryForm = (e: any) => {
        setShowingWalletEntryForm(!showingWalletEntryForm)
    }

    const createNewWallet = (e: any) => {
        console.log("CREATE NEW WALLET");
    }

    const useProposalCreatorAddress = (e: any) => {
        console.log("USING PROPOSAL CREATOR ADDRESS");
    }

    const saveMember = (e: any, member: MemberProps) => {
        const newSavedMembers = savedMembers
        newSavedMembers.push(member)
        setSavedMembers(newSavedMembers)
    }

    const addNewMember = (e: any) => {

    }

    return (
        <PageWrapper>
            <Page2Specs>
            <h1>Who will work on this proposal?</h1>
            <hr />

            <ProposalWorking>
                <div className="row">
                    <InfoField>
                        <h2>Add Members</h2>
                        <p>Tell us about who is creating this proposal. Provide some basic info so your funders and contributors know who you are.</p>
                        <p>You'll need to make a few on-chain decisions as your proposal progresses. Make sure the wallet address you provide is reasonably accessible to yourself.</p>
                    </InfoField>

                    <CreateMemberForm className="width">
                        <div className="form">
                            <InputField 
                                inputType="label"
                                placeholder="John"
                                labelName="Member Name"
                            />

                            <InputField
                                inputType="dropdown"
                                placeholder="Developer"
                                labelName="Member Role"
                                dropdownOptions={[
                                    "Product Manager", 
                                    "Back-end Developer", 
                                    "Front-end Developer",
                                    "Developer"
                                ]}
                                dropdownType="multipleOptions"
                            />

                            <InputField 
                                margin={"25px 0px 0px 0px"}
                                inputType="label"
                                placeholder="Johnny.eth"
                                labelName="Member Wallet Address"
                                subtext="Add their wallet address"
                            />

                            <InputField 
                                margin={"25px 0px 0px 0px"}
                                inputType="label"
                                placeholder="@JohnnyBitcoin"
                                labelName="Twitter Handle"
                                subtext="Add their Twitter handle"
                            />
                        </div>

                        <Button 
                            text="+ Add New Member"
                            onClick={addNewMember}
                            color="none"
                            border="blueIce"
                            hover="blueIce"
                            textColor="white"
                            width={12}
                            height={2.8}
                            margin={"12px 0px 0px 0px"}
                        />

                        <div className="bottomButtons">
                            <Button 
                                text="Save"
                                onClick={saveMember}
                                color="blueIce"
                                props={currentMember}
                                height={3.2}
                                textColor="white"
                                hover="blueIce"
                            />

                            <a onClick={(e) => {}}>Clear Fields</a>
                        </div>
                    </CreateMemberForm>
                    
                    {savedMembers.map((member: MemberProps) => 
                        <Member 
                            name={member.name}
                            role={member.role}
                            walletAddress={member.walletAddress}
                            twitterHandle={member.twitterHandle}
                        />
                    )}    
                </div>

                <div className="row">
                    <InfoField>
                        <h2>Which token do you want to receive funding in?</h2>
                        <p>This token will be the only token supported within your funding pool, and will be used to pay contributors.</p>
                    </InfoField>

                    <TokenForm className="width card">
                        <span className="label">Token Contract Address*</span>
                        <div className="addToken">
                            <InputField 
                                inputType="label"
                                placeholder="Token Address"
                            />

                            <Button 
                                text="Add Token"
                                onClick={(e: any) => {}}
                                color="none"
                                textColor="babyBlue"
                                hover="blueIce"
                                border="blueIce"
                                height={3}
                                width={8}
                                sizeType="em"
                            />
                        </div>

                        <span className="text">Suggested tokens</span>
                        <div className="tokenButtons">
                            <TokenButton token="DAI" />
                            <TokenButton token="USDC" />
                            <TokenButton token="ETH" />
                        </div>
                    </TokenForm>
                </div>
            </ProposalWorking>

            <h1>Where will the funding go?</h1>
            <hr />
            <ProposalFunding>
                <InfoField>
                    <h2>Add a receiving wallet address</h2>
                    <p>Provide some details about your proposal. Your potential funders and contributors need to know what you're trying to accomplish!</p>
                </InfoField>

                <ReceipientWalletForm className="width">
                    <h3 className="walletTitle">Receipient Wallet (Multi-Signature Wallets Preferred)</h3>
                    <span className="label">Add the wallet address where funding will be received.</span>

                    <div className="buttons">
                        <Button 
                            margin={"0em 1em 0em 0em"}
                            text="Use Existing Wallet"
                            onClick={toggleWalletEntryForm}
                            border="blueIce"
                            color={showingWalletEntryForm ? "blueIce" : "none"}
                            textColor="white"
                            hover="blueIce"
                            width={14}
                            height={2.7}
                        />

                        <Button 
                            text="Create New Wallet"
                            onClick={createNewWallet}
                            border="blueIce"
                            color="none"
                            textColor="white"
                            hover="blueIce"
                            width={14}
                            height={2.7}
                        />
                    </div>

                    {showingWalletEntryForm && (
                        <div className="receiveFunding">
                            <span className="label">Enter the wallet address where funding will be received.</span>
                            <InputField 
                                inputType="label"
                                placeholder="0x1B14F6C0b2AAA3173F3544b2F3FA9532063981FB"
                            />

                            <a onClick={(e) => {}}>Use proposal creator address</a>
                        </div>
                    )}
                </ReceipientWalletForm>
            </ProposalFunding>
            </Page2Specs>
        </PageWrapper>
    )
}