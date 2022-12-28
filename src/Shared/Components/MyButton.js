import React, { useState } from "react";

export default function MyButton({ label }) {
  const [type, setType] = useState("");

  function toggle() {
    if (type === "active") {
      setType("");
    } else {
      setType("active");
    }
  }
  return (
    <>
      {/* {type == "1" ? <button>{label}</button> : <></>}
      {type == "2" ? <h1>{label}</h1> : <></>}
      {type == "3" ? <span>{label}</span> : <></>}
      {type == "4" ? <li>{label}</li> : <></>} */}

      {/* {type == "active" ? (
        <button className="button active">{label}</button>
      ) : (
        <button className="button">{label}</button>
      )} */}

      {type === "active" ? (
        <button onClick={toggle} className="button active">
          {label}
        </button>
      ) : (
        <button onClick={toggle} className="button">
          {label}
        </button>
      )}
    </>
  );
}
