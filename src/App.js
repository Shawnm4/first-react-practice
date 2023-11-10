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

  function addNum() {
    setcountDis((count) => countDis + increment);
  }

  function subNum() {
    setcountDis((count) => countDis - increment);
  }

  function changeIncrementUp() {
    setIncrement((i) => i + 1);
  }
  function changeIncrementDown() {
    if (increment >= 1) setIncrement((i) => i - 1);
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
          <button onClick={subNum}>-</button>{" "}
        </span>
        <span>Subtract Or Add</span>
        <span>
          <button onClick={addNum}> + </button>{" "}
        </span>
      </div>
      <div>
        <span>
          <button onClick={changeIncrementDown}>-</button>
        </span>
        <span>Increment:{increment} </span>
        <span>
          <button onClick={changeIncrementUp}>+</button>
        </span>
      </div>
      {/* <button onClick={reset}>RESET</button> */}
      <p> {countDis}</p>
    </div>
  );
}
