import React, { useState } from "react"
import Member, { MemberProps } from "../../@shared/Member"
import {  
    Page2Specs,
    ProposalWorking, 
    ProposalFunding,
    CreateMemberForm,
    ReceipientWalletForm 
} from "./index.style"
import { PageWrapper, InfoField } from "../shared.style"
import Button from "../../@shared/Button/Button"
import InputField from "../../@shared/InputField"

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
                <InfoField>
                    <h2>Add Members</h2>
                    <p>Tell us about who is creating this proposal. Provide some basic info so your funders and contributors know who you are.</p>
                    <p>You'll need to make a few on-chain decisions as your proposal progresses. Make sure the wallet address you provide is reasonably accessible to yourself.</p>
                </InfoField>

                <CreateMemberForm>
                    <InputField 
                        inputType="label"
                        placeholder="John"
                        labelName="Member Name"
                        helperText="Enter member's name"
                    />

                    <InputField 
                        inputType="dropdown"
                        placeholder="Developer"
                        labelName="Member Role"
                        helperText="Select member's role"
                    />

                    <InputField 
                        inputType="label"
                        placeholder="Johnny.eth"
                        labelName="Member Wallet Address"
                        helperText="Add their wallet address"
                    />

                    <InputField 
                        inputType="label"
                        placeholder="@JohnnyBitcoin"
                        labelName="Twitter Handle"
                        helperText="Add their Twitter handle"
                    />

                    <Button 
                        text="+ Add New Member"
                        onClick={addNewMember}
                        color="none"
                        border="blueIce"
                        hover="blueIce"
                    />

                    <Button 
                        text="Save"
                        onClick={saveMember}
                        color="blueIce"
                        props={currentMember}
                    />

                    <a onClick={(e) => {}}>Clear Fields</a>
                </CreateMemberForm>
                
                {savedMembers.map((member: MemberProps) => 
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

                <ReceipientWalletForm>
                    <h3>Receipient Wallet (Multi-Signature Wallets Preferred)</h3>
                    
                    <Button 
                        text="Use Existing Wallet"
                        onClick={toggleWalletEntryForm}
                        border="blueIce"
                        color={showingWalletEntryForm ? "blueIce" : "none"}
                        textColor="white"
                    />

                    <Button 
                        text="Create New Wallet"
                        onClick={createNewWallet}
                        border="blueIce"
                        color="none"
                        textColor="white"
                    />

                    {showingWalletEntryForm && (
                        <>
                        <span>Add the wallet address where funding will be received.</span>
                        <InputField 
                            inputType="label"
                            placeholder=""

                        />

                        <a onClick={(e) => {}}>Use proposal creator address</a>
                        </>
                    )}
                </ReceipientWalletForm>
            </ProposalFunding>
            </Page2Specs>
        </PageWrapper>
    )
}