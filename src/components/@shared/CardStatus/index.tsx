import React from "react"
import { Status } from "./index.style"

interface CardStatusProps {
    status: string
}

function CardStatus({status}: CardStatusProps) {
    return <Status status={status}>{status}</Status>
}

export default CardStatus