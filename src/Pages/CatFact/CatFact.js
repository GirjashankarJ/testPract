import React, { useState } from "react";
import Header from "../../Shared/Components/Header";
import { customGet } from "../../Utilitites/custom-fetch";

export default function CatFact() {
  const [fact, setFact] = useState("Loading....");
  function loadFact() {
    customGet("https://catfact.ninja/fact").then((response) => {
      setFact(response.fact);
    });
  }
  return (
    <div>
      <Header />
      <button onClick={loadFact}>Get new</button>
      <h1>Here is a fact about cats</h1>
      <p>{fact}</p>
    </div>
  );
}
