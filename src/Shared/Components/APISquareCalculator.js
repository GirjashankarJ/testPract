import React, { useState } from "react";

export default function APISquareCalculator() {
  const [square, setSquare] = useState("");
  const [number, setNumber] = useState(0);

  function getSquare() {
    fetch(`http://localhost:3001/square-of-number?number=${number}`)
      .then((s) => s.json())
      .then((response) => {
        setSquare(response.square);
      });
  }

  return (
    <div>
      <input value={number} onChange={(e) => setNumber(e.target.value)} />
      <button onClick={getSquare}>Get Square</button>
      <hr></hr>
      <p>Square of 4 : {square}</p>
    </div>
  );
}
