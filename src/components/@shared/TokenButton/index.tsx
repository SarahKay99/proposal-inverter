import React from "react"
import { TokenButtonWrapper } from "./index.style";

interface TokenButtonProps {
    token: string
}

function TokenButton({
    token
}: TokenButtonProps) {
    return <TokenButtonWrapper>
        <img src="" /> {token}
    </TokenButtonWrapper>
}

export default TokenButton;