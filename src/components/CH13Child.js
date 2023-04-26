import React from "react";
import { Link, Outlet } from "react-router-dom";

function CH13Child() {
  return (
    <div>
      <h2>CH13Child</h2>
      <Link to="../Child">1st</Link> | &nbsp;
      <Link to="../Child/two">2nd</Link> | &nbsp;
      <Link to="../Child/three">3rd</Link>
      <hr />
      <Outlet />
    </div>
  );
}

export default CH13Child;
