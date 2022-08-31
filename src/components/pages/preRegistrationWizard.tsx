import React, { ReactElement, useEffect } from "react"
import Page from "../@shared/Page"
import Fund from "../Fund"

export default function PreRegistrationWizardPage(): ReactElement {
    return (
        <Page uri={'/preregistrationwizard'}>
            <Fund />
        </Page>
    )
}