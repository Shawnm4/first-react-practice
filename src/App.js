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
    setIncrement((i) => i - 1);
  }

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

      <p> {countDis}</p>
    </div>
  );
}
