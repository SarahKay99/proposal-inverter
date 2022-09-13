import React from "react";
import { MemberWrapper } from "./index.style";

export interface MemberProps {
    name: string,
    role: string,
    walletAddress: string,
    twitterHandle: string
}

function Member({
    name,
    role,
    walletAddress,
    twitterHandle
}: MemberProps) {
    return <MemberWrapper></MemberWrapper>
}

export default Member;