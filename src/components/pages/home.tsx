import React, { ReactElement, useEffect } from "react"
import Page from "../@shared/Page"
import Home from "../Home/index.tsx"

export default function HomePage(): ReactElement {

    return (
        <Page uri={'/'}>
            <Home />
        </Page>
    )
}