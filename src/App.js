import React from 'react';
import './App.css';
import RollDice from './components/RollDice';
import diceImg from './img/dice.png';

function App() {
  return (
    <div className="App">
      <div className="app-title">
          <h1>R</h1><h1>O</h1><h1>L</h1><h1>L</h1><h1>I</h1><h1>N</h1><h1>G</h1><h1></h1><h1>D</h1><h1>I</h1><h1>C</h1><h1>E</h1>
        <img src={diceImg}/>
      </div>
      <div className="alert alert-danger" role="alert">
         <RollDice />
      </div>
    </div>
  );
}

export default App;
