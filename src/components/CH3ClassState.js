import React, { Component } from "react";

let name = "Kwonsang";
const changeName = (newName) => (name = newName);

export class CH3ClassState extends Component {
  constructor() {
    super();
    /* 1. constructor 메서드를 사용하여 state를 설정하는 방식
    this.state = {
      nickname: "statkwon",
      age: 28,
      arr: [1, 2, 3],
      user: { name: "Kwonsang", age: 28 },
    };*/
    this.x = 0;
  }

  // 2. constructor 메서드를 사용하지 않고 state를 설정하는 방식
  state = {
    nickname: "statkwon",
    age: 26,
    arr: [1, 2, 3],
    user: { name: "Kwonsang", age: 26 },
  };

  /* Arrow Function을 사용하지 않았는데 정상 작동!?
  changeNickname(nickname) {
    console.log(this.state.nickname);
    this.setState({ nickname: nickname });
  }*/
  changeX = () => {
    this.x = 1;
    this.forceUpdate(); // 모든 컴포넌트와 그 자식 컴포넌트를 리렌더링 하므로 어플리케이션의 성능을 떨어뜨릴 수 있다.
  };
  changeNickname = (nickname) => this.setState({ nickname: nickname });
  changeAge = (age) => this.setState({ age: age });
  /* 이건 왜 정상 작동 안하는 것!?
  addArray() {
    this.setState({ arr: this.state.arr.concat(Math.ceil(Math.random() * 10)) });
  }*/
  addArray = () => this.setState({ arr: this.state.arr.concat(Math.ceil(Math.random() * 10)) });
  updateArray = (v, i) => this.setState({ arr: this.state.arr.map((value, index) => (i === index ? v : value)) });
  deleteArray = (i) => this.setState({ arr: this.state.arr.filter((value, index) => i !== index) });
  addObject = (key, value) => this.setState({ user: { ...this.state.user, [key]: value } });
  updateObject = (key, value) => this.setState({ user: { ...this.state.user, [key]: value } });
  deleteObject = (key) => {
    delete this.state.user[key];
    this.setState({ ...this.state.user });
  };

  render() {
    return (
      <div>
        <h2>CH3ClassState</h2>
        <div>
          Name: {name} <br />
          Nickname: {this.state.nickname} <br />
          Age: {this.state.age} <br />
          Arr: [{this.state.arr.join(" ")}] <br />
          User: &#123;{this.state.user.name}, {this.state.user.age}, {this.state.user.major}&#125; <br />
          X: {this.x}
        </div>
        <br />
        <div>
          <button onClick={() => changeName("Messi")}>Name</button>
          <button onClick={this.changeX}>X</button>
          <button onClick={() => this.changeNickname("Leo")}>Nickname</button>
          <button onClick={() => this.changeAge(35)}>Age</button>
          <button onClick={this.addArray}>Add Array</button>
          <button onClick={() => this.updateArray(0, 0)}>Update Array</button>
          <button onClick={() => this.deleteArray(0)}>Delete Array</button>
          <button onClick={() => this.addObject("major", "statistics")}>Add Object</button>
          <button onClick={() => this.updateObject("major", "machine learning")}>Update Object</button>
          <button onClick={() => this.deleteObject("major")}>Delete Object</button>
        </div>
      </div>
    );
  }
}

export default CH3ClassState;
