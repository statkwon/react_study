import React from "react";
import style from "./css/CH9Style.module.css";
import style2 from "./css/CH9Style2.module.css";

function CH9StyleModule() {
  return (
    <div>
      <h2>CH9StyleModule</h2>
      {/* CSS Module을 사용하면 '파일명'_'클래스명'_'해시값' 형태로 클래스가 만들어지므로 클래스명이 중복되는 현상을 방지할 수 있다. */}
      <h3 className={style.title}>
        <span className="innerColor">Ex</span>ample
      </h3>
      <h3 className={`${style2.title} ${style2.reverse}`}>Example</h3>
    </div>
  );
}

export default CH9StyleModule;
