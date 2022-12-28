import React from "react";

export default function Test({ label, type }) {
  return (
    <div>
      {type == "1" ? (
        <span>&#9733; &#9734;&#9734;&#9734;&#9734;</span>
      ) : (
        <>{label}</>
      )}
      {type == "2" ? (
        <span>&#9733; &#9733;&#9734;&#9734;&#9734;</span>
      ) : (
        <>{label}</>
      )}
      {type == "3" ? (
        <span>&#9733; &#9733;&#9733;&#9734;&#9734;</span>
      ) : (
        <>{label}</>
      )}
      {type == "4" ? (
        <span>&#9733; &#9733;&#9733;&#9733;&#9734;</span>
      ) : (
        <>{label}</>
      )}
      {type == "5" ? (
        <span>&#9733; &#9733;&#9733;&#9733;&#9733;</span>
      ) : (
        <>{label}</>
      )}
    </div>
  );
}
