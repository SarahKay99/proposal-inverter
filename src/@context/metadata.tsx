import React, {
    createContext,
    ReactElement,
    ReactNode,
    useContext,
  } from 'react'
import siteContent from '../content/site.json'
import appConfig from '../app.config'
import { ProposalInverterMetadataProviderValue } from './_types'
  
const ProposalInverterMetadataContext = createContext({} as ProposalInverterMetadataProviderValue)
  
function ProposalInverterMetadataProvider({
    children
}: {
    children: ReactNode
}): ReactElement {

    return (
      <ProposalInverterMetadataContext.Provider
        value={
          {
            siteContent,
            appConfig,
          } as ProposalInverterMetadataProviderValue
        }
      >
        {children}
      </ProposalInverterMetadataContext.Provider>
    )
}
  
// Helper hook to access the provider values
const useProposalInverterMetadata = (): ProposalInverterMetadataProviderValue =>
    useContext(ProposalInverterMetadataContext)
  
export { ProposalInverterMetadataProvider, useProposalInverterMetadata, ProposalInverterMetadataContext }
export default ProposalInverterMetadataProvider