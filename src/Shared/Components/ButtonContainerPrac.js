import React, { useState } from "react";
import MyButton from "./MyButton";

export default function ButtonContainerPrac() {
  const [fruits, setFruits] = useState(["Bananna", "Apple", "grapes"]);

  function additem() {
    const copy = fruits.concat([]);
    copy.push("mango");
    copy.push("pineapple");
    setFruits(copy);
  }
  return (
    <div>
      <button onClick={additem}>Add new</button>
      {fruits.map((item) => (
        <>
          <h5>{item}</h5>
        </>
      ))}
    </div>
  );
}
