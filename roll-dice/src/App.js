import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;


// import React, { useState } from 'react'
// function EmilyKnowsHooks(){
//   const [count, setCount] = useState(0)
//   return (
//     <div>
//       <h1>Thie Count is: {count}</h1>
//       <button onClick={ () => setCount(setCount +1)}>Add</button>
//     </div>
//   )
// }