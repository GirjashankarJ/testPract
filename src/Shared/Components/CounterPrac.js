import React, { useState } from "react";

export default function CounterPrac({ limit }) {
  const [counter, setCounter] = useState(0);
  function increament() {
    if (counter < limit) {
      setCounter(counter + 1);
    }
  }
  function decreament() {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  }
  return (
    <div>
      <button onClick={increament}>+</button>
      <span>{counter}</span>
      <button onClick={decreament}>-</button>
    </div>
  );
}
