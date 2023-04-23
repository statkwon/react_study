import React from "react";
import CH2FuncComp from "./CH2FuncComp";
import CH2ClassComp from "./CH2ClassComp";
import CH2Fragment from "./CH2Fragment";

function CH2() {
  return (
    <div>
      <h1 className="title">Chapter 2</h1>
      <CH2Fragment /> <hr />
      <CH2FuncComp /> <hr />
      <CH2ClassComp />
    </div>
  );
}

export default CH2;
