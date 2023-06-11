import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addAction, changeTextAction } from '../modules/todoListR';

function CH16TodoForm(props) {
  const inputField = useRef();
  const { text } = useSelector((state) => state.todoListR);
  const dispatch = useDispatch();
  const sendData = (evt) => {
    evt.preventDefault();
    dispatch(addAction(text));
    dispatch(changeTextAction(''));
    inputField.current.focus();
  };

  return (
    <form>
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          ref={inputField}
          value={text}
          onChange={(evt) => dispatch(changeTextAction(evt.target.value))}
        />
        <div className="input-group-append">
          <button type="submit" className="btn btn-primary mr-1" onClick={sendData}>
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default CH16TodoForm;
