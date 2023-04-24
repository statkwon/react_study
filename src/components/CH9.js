import React from "react";
import CH9Style from "./CH9Style";
import CH9StyleModule from "./CH9StyleModule";
import CH9StyledComponent from "./CH9StyledComponent";

function CH9() {
  return (
    <div>
      <h1 className="title">Chapter 9</h1>
      <CH9StyledComponent /> <hr />
      <CH9StyleModule /> <hr />
      <CH9Style />
    </div>
  );
}

export default CH9;
