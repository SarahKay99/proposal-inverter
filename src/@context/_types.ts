export interface AppConfig {

}

export interface SiteContent {

}

export interface StyleProps {
    color?: string
    fontWeight?: number
    fontSize?: string
}

export interface Milestone {
    title: string
    deliverables: string[]
    startDate: string
    endDate: string
    fundingAmount: number | string
    fundingCurrency: string
}

export interface ConnectorPopupProviderValue {
    showingWagmiPopup: boolean
    showingWalletDropdown: boolean
    toggleWagmiPopup: any
    toggleWalletDropdown: any
}

export interface ProposalInverterMetadataProviderValue {
    siteContent: any            // fill with SiteContent later
    appConfig: any              // fill with AppConfig later
}