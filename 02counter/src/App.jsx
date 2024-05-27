import "./App.css";
import { useState } from "react";

function App() {
  //let counter = 10;
  const [counter, setCounter] = useState(10); //useState: this is a hook

  const addValue = () => {
    // counter += 1;
    // console.log(counter);

    setCounter((prevValue) => prevValue + 1); //It also takes a callback function, which eliminates the issue of batching.
    // setCounter((prevValue) => prevValue + 1);
    // setCounter((prevValue) => prevValue + 1);
    // setCounter((prevValue) => prevValue + 1);
  };

  const removeValue = () => {
    setCounter(counter - 1);
  };

  return (
    <>
      <h1>Counter: {counter}</h1>
      <button onClick={addValue}>Add Value</button>
      {"  "}
      <button onClick={removeValue}>Remove Value</button>
    </>
  );
}

export default App;
