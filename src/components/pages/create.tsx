import React, { ReactElement, useEffect } from "react"
import Page from "../@shared/Page"
import Create from "../Create"

export default function CreatePage(): ReactElement {
    return (
        <Page uri={'/create'}>
            <Create />
        </Page>
    )
}