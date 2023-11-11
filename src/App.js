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
  const [inputVal, setinputVal] = useState("");

  function handleAddNum(e) {
    e.preventDefault();
    setcountDis((count) => countDis + increment);
  }

  function handleSubNum(e) {
    e.preventDefault();
    setcountDis((count) => countDis - increment);
  }

  function handleIncrementUp(e) {
    e.preventDefault();
    setIncrement((i) => i + 1);
  }
  function handleIncrementDown(e) {
    e.preventDefault();
    if (increment >= 1) setIncrement((i) => i - 1);
  }

  function handleReset(e) {
    e.preventDefault();
    setIncrement(1);
    setcountDis(0);
    setinputVal("");
  }

  function handleAddInput(e) {
    e.preventDefault();
    setcountDis(inputVal + countDis);
  }

  function handleSubInput(e) {
    e.preventDefault();
    setcountDis(countDis - inputVal);
  }

  return (
    <form style={{ textAlign: "center" }}>
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
      <div>
        <button onClick={handleSubInput}>-</button>
        <input
          value={inputVal}
          onChange={(e) => setinputVal(+e.target.value)}
          placeholder="Subtract or Add"
        ></input>
        <button onClick={handleAddInput}> +</button>
      </div>

      <p> {countDis}</p>
      {increment !== 1 || inputVal !== "" ? (
        <button onClick={handleReset}>RESET</button>
      ) : null}
    </form>
  );
}
