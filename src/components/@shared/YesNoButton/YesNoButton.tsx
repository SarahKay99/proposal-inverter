import React, { useState } from "react";
import Button from "../Button/Button";
import { YesNoButtonWrapper } from './YesNoButton.style';

interface YesNoButtonProps {
    color?: "default" | "blueIce"
    rounding?: "default" | "round"
    width?: 'default' | number
    height?: 'default' | number
}

function YesNoButton({
    color="default",
    rounding="default",
    width='default',
    height='default'
}: YesNoButtonProps) {

    const [yesOrNo, setYesOrNo] = useState<string>('');

    const select = (e: any, option: string) => {
        e.preventDefault();
        if (option !== yesOrNo) setYesOrNo(option);
        else setYesOrNo('');
    }

    return <YesNoButtonWrapper>
        <Button 
            text={"Yes"} 
            rounding={'default'}
            color={yesOrNo == "yes" ? color : 'none'}
            width={4.2}
            height={height}
            onClick={(e: any) => select(e, "yes")}
        />
        <Button 
            text={"No"} 
            rounding={'default'}
            color={yesOrNo == "no" ? color : 'none'}
            width={4.2}
            height={height}
            onClick={(e: any) => select(e, "no")}
        />
    </YesNoButtonWrapper>
}

export default YesNoButton;