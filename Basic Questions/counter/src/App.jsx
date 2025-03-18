import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  // increment, decrement, and reset

  const counterTimer = (value) => {
    if (value < -100) {
      return "minimum limit";
    } else if (value > 101) {
      return "maximum  limit";
    } else {
      return value;
    }
  };

  return (
    <>
      <h1>{counterTimer(count)}</h1>
      <div>
        <button onClick={() => setCount(count + 1)}>increment </button>
        <button onClick={() => setCount(0)}>reset</button>
        <button onClick={() => setCount(count - 1)}>decrement </button>
      </div>
    </>
  );
}

export default App;
