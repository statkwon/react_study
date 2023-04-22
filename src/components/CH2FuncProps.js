import React from "react";
import PropTypes from "prop-types";

function CH2FuncProps(props) {
  const { name, changeName, nickname, setNickname, age, setAge, arr, user, x, children } = props;
  return (
    <div>
      <h2>CH2FuncProps</h2>
      {children}
      <div>
        Name: {name} <br />
        Nickname: {nickname} <br />
        Age: {age} <br />
        Arr: [{arr.join(" ")}] <br />
        User: &#123;{user.name}, {user.age}&#125; <br />
        X: {x} <br />
      </div>
      <br />
      <button onClick={() => changeName("Messi")}>Name</button>
      <button onClick={() => setNickname("Leo")}>Nickname</button>
      <button onClick={() => setAge(35)}>Age</button>
    </div>
  );
}

CH2FuncProps.propTypes = {
  name: PropTypes.string.isRequired,
  changeName: PropTypes.func,
  nickname: PropTypes.string,
  setNickname: PropTypes.func,
  age: PropTypes.number,
  setAge: PropTypes.func,
  arr: PropTypes.array,
  user: PropTypes.object,
};

CH2FuncProps.defaultProps = {
  x: 0,
};

export default CH2FuncProps;
