import React from 'react';
import './App.css';
import Card from './components/Card/Card';
import './@styles/styles.css';
import InputField from './components/InputField';
import Navbar from './components/NavBar/Navbar';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <header className="AppHeader">
        <Navbar />
        
        <div className="flexBox">
          <div className="cardWrapper">
            <Card 
              proposalTitle={"The Next Gitcoin Round"} 
              proposalText={"We are GitcoinDAO and we want to fund GR 20 to continue funding public goods.  Lets fund the future of web3 together. Regen above Degen friends."}
              status={"Needs Contributors"}
              daoName={"Gitcoin DAO"}
              daoIcon={"https://pbs.twimg.com/profile_images/1461700151383400450/3Kwlnvl__400x400.png"}
            />
          </div>

          <div className="formWrapper">
            <form>
              <InputField
                inputType={"label"}
                labelName={"Your name"}
                placeholder={"Enter your name here"} 
                questionMarkText={"This box is for entering your name. Please don't enter something profane."}
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
                questionMarkText={"Write details about yourself in this box."}
                charLimit={500}
              />

              <br />

              <InputField 
                inputType={"dropdown"}
                labelName={"Your Favorite Hobby"}
                placeholder={"Select a hobby..."}
                dropdownOptions={["Sports", "Gaming", "Eating"]}
              />

              <br />

              <InputField 
                inputType={"yesNo"}
                color={"blueIce"}
                labelName={"Do you want this information to be public?"}
              />

              <br />

              <InputField 
                inputType={"yesNo"}
                color={"default"}
                labelName={"Do you want this information published to the blockchain?"}
              />
            </form>
          </div>
        </div>

        <Footer />
      </header>
    </div>
  );
}

export default App;
