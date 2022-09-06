import React, { ReactElement } from 'react';
import { useRouter } from "next/router"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';
import './@styles/styles.css';
import HomePage from './components/pages/home';
import FundPage from './components/pages/fund';
import PreRegistrationWizardPage from './components/pages/preRegistrationWizard';

import { WagmiConfig } from 'wagmi'
import { client } from './@configs';
import ConnectorPopupProvider from './@context/connector';
import WalletConnectPopup from './components/@shared/WalletConnectPopup/WalletConnectPopup';

function App() {
  const router = useRouter()

  return (
    <WagmiConfig client={client}>
      <ConnectorPopupProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/fund" element={<FundPage />} />
            <Route path="/preregistrationwizard" element={<PreRegistrationWizardPage />} />
          </Routes>
        </div>
      </Router>

      <WalletConnectPopup />
      </ConnectorPopupProvider>
    </WagmiConfig>
  );
}

export default App;
