// import logo from './logo.svg';

import { useState } from "react";

// import './App.css';
export default App;

function App() {
  return <Counter />;
}

function Counter() {
  const [increment, setIncrement] = useState(1);
  const [countDis, setcountDis] = useState(0);

  function handleAddNum() {
    setcountDis((count) => countDis + increment);
  }

  function handleSubNum() {
    setcountDis((count) => countDis - increment);
  }

  function handleIncrementUp() {
    setIncrement((i) => i + 1);
  }
  function handleIncrementDown() {
    if (increment >= 1) setIncrement((i) => i - 1);
  }

  function handleReset() {
    setIncrement(1);
    setcountDis(0);
  }

  // function reset() {
  //   setIncrement((i) => (i = increment));
  //   setcountDis((c) => (c = countDis));
  // }

  return (
    <div>
      <div>
        <span>
          {" "}
          <button onClick={handleSubNum}>-</button>{" "}
        </span>
        <span>Subtract Or Add</span>
        <span>
          <button onClick={handleAddNum}> + </button>{" "}
        </span>
      </div>
      <div>
        <span>
          <button onClick={handleIncrementDown}>-</button>
        </span>
        <span>Increment:{increment} </span>
        <span>
          <button onClick={handleIncrementUp}>+</button>
        </span>
      </div>
      {/* <button onClick={reset}>RESET</button> */}
      <p> {countDis}</p>
      <button onClick={handleReset}>RESET</button>
    </div>
  );
}
