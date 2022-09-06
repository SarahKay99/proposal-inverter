import React, {
    createContext,
    ReactElement,
    ReactNode,
    useContext,
    useState,
  } from 'react'
import siteContent from '../content/site.json'
import appConfig from '../app.config'
import { ConnectorPopupProviderValue } from './_types'
  
const ConnectorPopupContext = createContext({} as ConnectorPopupProviderValue)
  
function ConnectorPopupProvider({
    children
}: {
    children: ReactNode
}): ReactElement {

    const [showingWagmiPopup, setShowingPopup] = useState(false);
    const [showingWalletDropdown, setShowingWalletDropdown] = useState(false);

    const toggleWagmiPopup = (e: any) => {
      console.log(e)
      e.preventDefault();
      setShowingPopup(!showingWagmiPopup);
    }

    const toggleWalletDropdown = (e: any) => {
      e.preventDefault();
      setShowingWalletDropdown(!showingWalletDropdown)
    }

    return (
      <ConnectorPopupContext.Provider
        value={
          {
            showingWagmiPopup,
            showingWalletDropdown,
            toggleWagmiPopup,
            toggleWalletDropdown
          } as ConnectorPopupProviderValue
        }
      >
        {children}
      </ConnectorPopupContext.Provider>
    )
}
  
// Helper hook to access the provider values
const useConnectorPopup = (): ConnectorPopupProviderValue =>
    useContext(ConnectorPopupContext)
  
export { ConnectorPopupProvider, useConnectorPopup, ConnectorPopupContext }
export default ConnectorPopupProvider