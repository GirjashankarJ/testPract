import React, { useState } from "react";
import MyButton from "./MyButton";

export default function ButtonsWithformPrac() {
  const [items, setItems] = useState(["apple", "pineapple"]);
  const [input, setInput] = useState("");

  function addNewItem() {
    let copy = items.concat([]);
    copy.push(input);
    setItems(copy);
    setInput("");
  }
  function makeUpperCase() {
    let copy = items.concat([]);
    copy = copy.map((x) => x.toUpperCase());
    setItems(copy);
  }
  function sortArray() {
    let copy = items.concat([]);
    copy = copy.sort();
    setItems(copy);
  }
  function makeReverse() {
    let copy = items.concat([]);
    copy = copy.reverse();
    setItems(copy);
  }

  return (
    <div>
      <input value={input} onChange={(e) => setInput(e.target.value)} />

      <button onClick={addNewItem}>Add</button>
      <button onClick={makeUpperCase}>Make Uppercase</button>
      <button onClick={sortArray}>sort array</button>
      <button onClick={makeReverse}>Reverse array</button>

      <hr />
      {items.map((item) => (
        <MyButton label={item} />
      ))}
    </div>
  );
}
