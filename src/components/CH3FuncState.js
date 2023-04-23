import React, { useState } from "react";

function CH3FuncState() {
  // 함수 컴포넌트에서는 useState라는 Hook을 사용하여 state variable을 정의한다.
  // 함수 컴포넌트에서 forceUpdate() 메서드를 사용하는 방법?
  let name = "Kwonsang";
  const [nickname, setNickname] = useState("statkwon");
  const [age, setAge] = useState(26);
  const [arr, setArr] = useState([1, 2, 3]);
  const [user, setUser] = useState({ name: "Kwonsang", age: 26 });

  const changeName = (newName) => (name = newName);
  const changeNickname = (newNickname) => setNickname(newNickname);
  const changeAge = (newAge) => setAge(newAge);
  const addArray = () => setArr(arr.concat(Math.ceil(Math.random() * 10)));
  const updateArray = (v, i) => setArr(arr.map((value, index) => (i === index ? v : value)));
  const deleteArray = (i) => setArr(arr.filter((value, index) => i !== index));
  const addObject = (key, value) => setUser({ ...user, [key]: value });
  const updateObject = (key, value) => setUser({ ...user, [key]: value });
  const deleteObject = (key) => {
    delete user[key];
    setUser({ ...user });
  };

  return (
    <div>
      <h2>CH3FuncState</h2>
      <div>
        Name: {name} <br />
        Nickname: {nickname} <br />
        Age: {age} <br />
        Arr: [{arr.join(" ")}] <br />
        User: &#123;{user.name}, {user.age}, {user.major}&#125; <br />
      </div>
      <br />
      <div>
        <button onClick={() => changeName("Messi")}>Name</button>
        <button onClick={() => changeNickname("Leo")}>Nickname</button>
        <button onClick={() => changeAge(35)}>Age</button>
        <button onClick={addArray}>Add Array</button>
        <button onClick={() => updateArray(0, 0)}>Update Array</button>
        <button onClick={() => deleteArray(0)}>Delete Array</button>
        <button onClick={() => addObject("major", "statistics")}>Add Object</button>
        <button onClick={() => updateObject("major", "machine learning")}>Update Object</button>
        <button onClick={() => deleteObject("major")}>Delete Object</button>
      </div>
    </div>
  );
}

export default CH3FuncState;
