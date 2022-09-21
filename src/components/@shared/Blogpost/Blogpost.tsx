import React from "react"
import Button from "../Button/Button"
import { BlogpostWrapper } from "./Blogpost.style"

interface BlogpostProps {
    title: string
    date: string
    icon: string
    link: string
    width?: string
}

function Blogpost({
    title,
    date,
    icon,
    link,
    width='default'
}: BlogpostProps) {
    const redirect = (e?: any) => {
        window.location.href=link
    }

    return (
        <BlogpostWrapper width={width}>
            <img src={icon}/>
            <div className="contentWrapper">
                <div className="title">
                    {title}
                </div>
                <div className="bottom">
                    <span>{date}</span>
                    <Button 
                        text="Go To Article"
                        onClick={redirect}
                        color={"blueIce"}
                        hover={"blueIce"}
                        textColor={"white"}
                        width={100}
                        height={30}
                        sizeType={"px"}
                    />
                </div>
            </div>
        </BlogpostWrapper>
    )
}

export default Blogpost;