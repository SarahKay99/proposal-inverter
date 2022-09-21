import React, { useState } from "react"
import { CoinAmountInputWrapper } from "./index.style"

interface CoinAmountInputProps {
    placeholder: string
    defaultCoin: string
}

function CoinAmountInput({
    placeholder,
    defaultCoin
}: CoinAmountInputProps) {

    const [selectedCoin, setSelectedCoin] = useState(defaultCoin);

    return <CoinAmountInputWrapper>
        <div className="flexBox">
            <input type="text" placeholder={placeholder}/>
            <button
                onClick={(e) => {}}
            >
                <img className="icon" src={"USDC.png"}/>
                <span className="coin">{selectedCoin}</span>
            </button>
        </div>
    </CoinAmountInputWrapper>
}

export default CoinAmountInput;