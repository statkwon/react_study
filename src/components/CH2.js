import React, { useState } from "react";
import CH2ClassComp from "./CH2ClassComp";
import CH2ClassState from "./CH2ClassState";
import CH2ClassProps from "./CH2ClassProps";
import CH2FuncState from "./CH2FuncState";
import CH2FuncProps from "./CH2FuncProps";

function CH2() {
  let name = "Kwonsang";
  const [nickname, setNickname] = useState("statkwon");
  const [age, setAge] = useState(26);
  const arr = [1, 2, 3];
  const user = { name: "Kwonsang", age: 26 };
  const changeName = (newName) => {
    name = newName;
    console.log(name);
  };

  return (
    <div>
      <h1 className="title">Chapter 2</h1>
      <CH2FuncProps name={name} changeName={changeName} nickname={nickname} setNickname={setNickname} age={age} setAge={setAge} arr={arr} user={user}>
        <div>This is a children of CH2FuncProps.</div>
      </CH2FuncProps>
      <hr />
      <CH2FuncState /> <hr />
      <CH2ClassProps
        name={name}
        changeName={changeName}
        nickname={nickname}
        setNickname={setNickname}
        age={age}
        setAge={setAge}
        arr={arr}
        user={user}
      >
        <div>This is a children of CH2ClassProps.</div>
      </CH2ClassProps>
      <hr />
      <CH2ClassState /> <hr />
      <CH2ClassComp /> <hr />
    </div>
  );
}

export default CH2;
