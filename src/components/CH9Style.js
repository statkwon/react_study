import React from "react";
import "./css/CH9Style.css";
import "./css/CH9Style.scss";

function CH9Style() {
  const title_color = "cssTitle cssColor";
  const style = { background: "gray", color: "white", padding: "10px", fontSize: "24pt" };
  return (
    <div>
      <h2>CH9Style</h2>
      {/* 한 .css/.scss 파일의 CSS 클래스명이 다른 .css/.scss 파일의 클래스명과 중복되면 클래스가 덮어 써지는 문제가 발생한다. */}
      <h3 className="cssTitle cssColor">Example</h3>
      <h3 className={"cssTitle cssColor"}>Example</h3>
      <h3 className={title_color}>Example</h3>
      <h3 className="scssTitle">Example</h3>
      <h3 style={{ background: "gray", color: "white", padding: "10px", fontSize: "24pt" }}>Example</h3>
      <h3 style={style}>Example</h3>
    </div>
  );
}

export default CH9Style;
