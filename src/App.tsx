import React from 'react';
import './App.css';
import Card from './components/Card/Card';
import './@styles/styles.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Card 
          proposalTitle={"The Next Gitcoin Round"} 
          proposalText={"We are GitcoinDAO and we want to fund GR 20 to continue funding public goods.  Lets fund the future of web3 together. Regen above Degen friends."}
          status={"Needs Contributors"}
          daoName={"Gitcoin DAO"}
          daoIcon={"https://pbs.twimg.com/profile_images/1461700151383400450/3Kwlnvl__400x400.png"}
        />
      </header>
    </div>
  );
}

export default App;
