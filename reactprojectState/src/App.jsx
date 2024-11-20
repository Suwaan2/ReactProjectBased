import { useState } from "react";
import "./App.css";

function App() {
  const [Counter, setCounter] = useState(9);

  // let Counter;

  const addvalue = () => {
    //  return  Counter = Counter + 5
    setCounter(Counter + 1);
    if (Counter < 0) {
      console.log("Number is Negative", Math.random());
    } else {
    console.log("value added", Counter);
    }
  };

  const removeValue = () => {
    setCounter(Counter - 1);
    if (Counter < 0) {
      console.log("Number is Negative", Math.random());
    } else {
      console.log("Value removed", Counter);
    }
  };

 

  return (
    <>
      <h1>Hello State</h1>
      <h2>Counter Value: {Counter} </h2>
      <button onClick={addvalue}>Add Value</button>
      <button onClick={removeValue}>Remove Value</button>
      <p>Real time Value : {Counter}</p>
    </>
  );
}

export default App;
