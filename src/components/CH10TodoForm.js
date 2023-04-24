import React, { useRef } from "react";

function CH10TodoForm(props) {
  const { addTodo } = props;
  const todoRef = useRef(null);
  let text = "";
  const changeString = (evt) => (text = evt.target.value);
  const sendData = (evt) => {
    evt.preventDefault();
    addTodo(text);
    todoRef.current.value = "";
    todoRef.current.focus();
  };

  return (
    <form>
      <div className="input-group">
        <input type="text" className="form-control" ref={todoRef} onChange={changeString}></input>
        <div className="input-group-append">
          <button type="submit" className="btn btn-primary mr-1" onClick={sendData}>
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default CH10TodoForm;
