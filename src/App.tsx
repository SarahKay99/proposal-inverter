import React from 'react';
import './App.css';
import Card from './components/Card/Card';
import './@styles/styles.css';
import InputField from './components/InputField';

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

        <InputField
          inputType={"label"}
          labelName={"Your name"}
          placeholder={"Enter your name here"} 
          questionMarkText={"This box is for entering your name."}
          charLimit={20}
          helperText={"Make sure your name is appropriate."}
          // errorText={"This name is too long."}
          // warningText={"This is a stupid name 🤷"}
        />

        <br />

        <InputField
          inputType={"textArea"}
          labelName={"About you"}
          placeholder={"Tell us about you"}
        />

        <br />

        <InputField 
          inputType={"dropdown"}
          labelName={"Your Favorite Hobby"}
          placeholder={"Select a hobby..."}

        />
      </header>
    </div>
  );
}

export default App;
