import React from "react";
import { useState } from "react";

export default function RatingWithClick({ type }) {
  const [bodyVisible, setBodyVisible] = useState(true);

  function toggle() {
    if (bodyVisible == true) {
      setBodyVisible(false);
    } else {
      setBodyVisible(true);
    }
  }
  return (
    <>
      {type == "1" ? <span> &#9733;&#9734;&#9734;&#9734;&#9734;</span> : <></>}
      {type == "2" ? <span>&#9733;&#9733;&#9734;&#9734;&#9734;</span> : <></>}
      {type == "3" ? <span>&#9733;&#9733;&#9733;&#9734;&#9734;</span> : <></>}
      {type == "4" ? <span>&#9733;&#9733;&#9733;&#9733;&#9734;</span> : <></>}
      {type > 4 ? <span>Invalid</span> : <></>}
    </>
  );
}
