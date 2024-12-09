import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  // setCounter is a call back function its return the pre
  let [counter, setCounter] = useState(0);
  // let counter = 5;

  const addvalue = () => {
    // counter += 1;
    // In this its create the batch an excute this and its see same work again again so its plus by only one
    // setCounter(counter + 1);
    // setCounter(counter + 1);
    // setCounter(counter + 1);
    // setCounter(counter + 1);

    // setCounter is function that accept the  call back. prevCouter is the  last updated state, that is fetch  and add 1 into it
    // now its treate different batch and
    setCounter((preCounter) => preCounter + 1);
    setCounter((preCounter) => preCounter + 1);
    setCounter((preCounter) => preCounter + 1);
    setCounter((preCounter) => preCounter + 1);
  };

  const removeValue = () => {
    setCounter(counter - 1);
  };

  return (
    <>
      <h1>Count React</h1>
      <h2>Count Value: {counter}</h2>
      <button onClick={addvalue}>increment val {counter}</button>
      <br />
      <button onClick={removeValue}>decrement val {counter}</button>
      <p>footer: {counter}</p>
    </>
  );
}

export default App;
