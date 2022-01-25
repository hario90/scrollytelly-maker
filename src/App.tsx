import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { ThingA } from './features/thing-a/ThingA';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ThingA/>
        {/* <ThingB/> */}
        <Counter />
      </header>
    </div>
  );
}

export default App;
