import React, { useState } from "react"
import CategoryMenu from "src/components/@shared/CategoryMenu"
import Filter from "src/components/@shared/Filter"
import FundingPartnersSelect from "src/components/@shared/FundingPartnersSelect"
import { PageWrapper, Page4Specs, BottomText } from "../shared.style"
import { MenuAndFilters, FundingPartnersWrapper } from "./index.style"

interface FundingPartner {
    title: "ETH Foundation",
    description: "Information about the Forum Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
    grantGenre: "ReFi Grants",
    successRate: "3 of 7",
    poolQuantity: 200000,
    poolCurrency: "USDC",
    maxAllocationQuantity: 10000,
    maxAllocationCurrency: "USDC",
}

const placeholderPartners = [
    {
        title: "ETH Foundation",
        description: "Information about the Forum Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
        grantGenre: "ReFi Grants",
        successRate: "3 of 7",
        poolQuantity: 200000,
        poolCurrency: "USDC",
        maxAllocationQuantity: 10000,
        maxAllocationCurrency: "USDC",
        selected: false
    },
    {
        title: "ETH Foundation",
        description: "Information about the Forum Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
        grantGenre: "Celo Grants",
        successRate: "3 of 7",
        poolQuantity: 200000,
        poolCurrency: "USDC",
        maxAllocationQuantity: 10000,
        maxAllocationCurrency: "USDC",
        selected: false
    },
    {
        title: "ETH Foundation",
        description: "Information about the Forum Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
        grantGenre: "Celo Grants",
        successRate: "3 of 7",
        poolQuantity: 200000,
        poolCurrency: "USDC",
        maxAllocationQuantity: 10000,
        maxAllocationCurrency: "USDC",
        selected: false
    },
    {
        title: "ETH Foundation",
        description: "Information about the Forum Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
        grantGenre: "ReFi Grants",
        successRate: "3 of 7",
        poolQuantity: 200000,
        poolCurrency: "USDC",
        maxAllocationQuantity: 10000,
        maxAllocationCurrency: "USDC",
        selected: false
    },
    {
        title: "ETH Foundation",
        description: "Information about the Forum Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
        grantGenre: "ReFi Grants",
        successRate: "3 of 7",
        poolQuantity: 200000,
        poolCurrency: "USDC",
        maxAllocationQuantity: 10000,
        maxAllocationCurrency: "USDC",
        selected: false
    },
    {
        title: "ETH Foundation",
        description: "Information about the Forum Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
        grantGenre: "Celo Grants",
        successRate: "3 of 7",
        poolQuantity: 200000,
        poolCurrency: "USDC",
        maxAllocationQuantity: 10000,
        maxAllocationCurrency: "USDC",
        selected: false
    },
]

export default function Page4a() {
    const [selectedPartners, setSelectedPartners] = useState<any>([]);

    const selectThisGrant = (fundingPartner: any) => {
        setSelectedPartners((existing: any) => [...existing, fundingPartner])
    }

    return (
        <PageWrapper>
            <Page4Specs>
                <h1>Looking for Funding?</h1>
                <p>Check out our registered partners and share your propsal with them to increase your chances of receiving funding.</p>
            
                <MenuAndFilters>
                    <CategoryMenu options={[
                        "All Categories", 
                        "Refi Grants", 
                        "Desci Grants", 
                        "ETH Grants", 
                        "Button"
                    ]}/>
                    <Filter />
                </MenuAndFilters>

                <FundingPartnersWrapper>
                    {placeholderPartners.map((placeholderPartner: any, idx: number) => {
                        return <FundingPartnersSelect 
                            grantGenre={placeholderPartner.grantGenre}
                            title={placeholderPartner.title}
                            summary={placeholderPartner.description}
                            grantSuccessRate={placeholderPartner.successRate}
                            grantPoolQuantity={placeholderPartner.poolQuantity}
                            grantPoolCurrency={placeholderPartner.poolCurrency}
                            maxAllocationQuantity={placeholderPartner.maxAllocationQuantity}
                            maxAllocationCurrency={placeholderPartner.maxAllocationCurrency}
                            selected={placeholderPartner.selected}
                            selectThisGrant={selectThisGrant}
                        />
                    })}
                </FundingPartnersWrapper>

                <BottomText>
                    <h3>You've selected {selectedPartners.length} registered partners</h3>
                    <p>Click 'Proceed' to answer some questions for each registered partner that you're submitting your proposal to.</p>
                </BottomText>

            </Page4Specs>
        </PageWrapper>
    )
}