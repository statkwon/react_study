import React, { useState } from "react";
import CH3ClassState from "./CH3ClassState";
import CH3ClassProps from "./CH3ClassProps";
import CH3FuncState from "./CH3FuncState";
import CH3FuncProps from "./CH3FuncProps";

function CH3() {
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
      <h1 className="title">Chapter 3</h1>
      <CH3FuncProps name={name} changeName={changeName} nickname={nickname} setNickname={setNickname} age={age} setAge={setAge} arr={arr} user={user}>
        <div>This is a children of CH3FuncProps.</div>
      </CH3FuncProps>
      <hr />
      <CH3FuncState /> <hr />
      <CH3ClassProps
        name={name}
        changeName={changeName}
        nickname={nickname}
        setNickname={setNickname}
        age={age}
        setAge={setAge}
        arr={arr}
        user={user}
      >
        <div>This is a children of CH3ClassProps.</div>
      </CH3ClassProps>
      <hr />
      <CH3ClassState /> <hr />
    </div>
  );
}

export default CH3;
