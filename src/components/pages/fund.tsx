import React, { ReactElement, useEffect } from "react"
import Page from "../@shared/Page"
import Fund from "../Fund"

export default function FundPage(): ReactElement {    
    return (
        <Page uri={'/fund'}>
            <Fund />
        </Page>
    )
}