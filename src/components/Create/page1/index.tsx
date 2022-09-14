import React, { useState } from "react"
import InputField from "src/components/@shared/InputField";
import { PageWrapper, InfoField } from "../shared.style"
import { ProposalLeading, ProposalAbout, Page1Specs } from "./index.style"

export default function Page1() {

    const [extraMedia, setExtraMedia] = useState<number>(0);

    const connectToTwitter = () => {
        console.log("CONNECT TO TWITTER HERE");
    }

    const addExtraMedia = (e: any) => {
        setExtraMedia(extraMedia + 1);
    }

    const subtractExtraMedia = (e: any) => {
        setExtraMedia(extraMedia - 1);
    }

    const extraMediaRows = () => {
        if (extraMedia == 0) return [];

        const rows: any = [];
        for (let i = 0; i < extraMedia; i++) {
            rows.push(
                <div className="addExternalMedia">
                    <button className="removeMedia" onClick={(e) => subtractExtraMedia(e)}/>
                    <InputField 
                        inputType="dropdown"
                        placeholder="Platform"
                        dropdownOptions={["Platform1", "Platform2", "Platform3"]}
                    />
            
                    <InputField 
                        inputType="label"
                        placeholder="Platform URL"
                    />
                </div>
            );
        }
        return rows;
    }

    return (
        <PageWrapper>
            <Page1Specs>
                <h1>Who's Leading This Proposal?</h1>
                <hr />
                <ProposalLeading>
                    <div className="flexBox">
                        <InfoField>
                            <h2>Proposal Owner</h2>
                            <p>Tell us about who is creating this proposal. Provide some basic info so your funders and contributors know who you are.</p>
                            <p>You’ll need to make a few on-chain decisions as your proposal progresses. Make sure the wallet address you provide is reasonably accessible to yourself.</p>
                        </InfoField>

                        <div className="form widthControl">
                            <div className="secondColumn">
                                <InputField 
                                    inputType="label"
                                    labelName="Owner Name"
                                    placeholder="Jessica"
                                    width={12}
                                    fieldWidth={12}
                                />

                                <InputField 
                                    inputType="button"
                                    labelName="Connect to Twitter Account"
                                    width={12}
                                    margin={"30px 0px 0px 0px"}
                                    questionMarkText="Connect your name to your Twitter identity."
                                    buttonProps={{
                                        text: "Click to Connect",
                                        onClick: connectToTwitter(),
                                        color: "blueIce",
                                        hover: "blueIce",
                                        width: 12,
                                        height: 2.7,
                                        sizeType: "em",
                                        textColor: "white",
                                    }}
                                />
                            </div>

                            <div className="thirdColumn">
                                <InputField 
                                    inputType="label"
                                    labelName="Owner Address"
                                    placeholder="Jessica.eth"
                                />
                            </div>
                        </div>
                    </div>
                </ProposalLeading>

                <h1>What is your proposal about?</h1>
                <hr />
                <ProposalAbout>
                    <div className="flexBox">
                        <InfoField>
                            <h2>Proposal Definition</h2>
                            <p>Provide some details about your proposal. Your potential funders and contributors need to know what you’re trying to accomplish!</p>
                        </InfoField>

                        <div className="widthControl">
                            <InputField 
                                inputType="label"
                                labelName="Title"
                                placeholder="Creating a new system for work with web3"
                                questionMarkText="Make sure your title is appropriate."
                                charLimit={100}
                            />

                            <InputField 
                                inputType="textArea"
                                labelName="Short Description*"
                                placeholder="Explain what you want to do in a few sentences..."
                                questionMarkText="Make your description succinct and descriptive."
                                charLimit={250}
                            />

                            <InputField 
                                inputType="textArea"
                                labelName="Long Description*"
                                placeholder="Alright, now give us the details..."
                                questionMarkText="Go all out!"
                                charLimit={3000}
                            />
                            
                            <div>
                                <div className="addExternalMedia">
                                    <InputField 
                                        inputType="dropdown"
                                        labelName="Add External Media (max. 8)"
                                        placeholder="Platform"
                                        questionMarkText="Add external media"
                                        dropdownOptions={["Platform1", "Platform2", "Platform3"]}
                                        width={12}
                                    />

                                    <InputField 
                                        inputType="label"
                                        placeholder="Platform URL"
                                    />
                                </div>
                            </div>

                            {extraMedia > 0 && (
                                extraMediaRows()
                            )}

                            <a onClick={(e) => addExtraMedia(e)}>+ Add More Media</a>

                            <InputField 
                                inputType="dropdown"
                                labelName="Select Project Category (max. 3)"
                                dropdownType="multipleOptions"
                                maxOptionsSelected={3}
                                placeholder="Select Category"
                                dropdownOptions={["ReFi", "DeSci", "DeFi", "Public Goods", "DAOs"]}
                                margin={"20px 0px 0px 0px"}
                            />

                        </div>
                    </div>
                </ProposalAbout>
            </Page1Specs>
        </PageWrapper>
    )
}