import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';
import './@styles/styles.css';
import HomePage from './components/pages/home';

import { WagmiConfig } from 'wagmi'
import { client } from './@configs';
import ConnectorPopupProvider from './@context/connector';
import WalletConnectPopup from './components/@shared/WalletConnectPopup/WalletConnectPopup';
import CreatePage from './components/pages/create';

function App() {
  return (
    <WagmiConfig client={client}>
      <ConnectorPopupProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/create" element={<CreatePage />} />
          </Routes>
        </div>
      </Router>

      <WalletConnectPopup />
      </ConnectorPopupProvider>
    </WagmiConfig>
  );
}

export default App;
