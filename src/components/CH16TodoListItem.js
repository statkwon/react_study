import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteAction, updateAction } from '../modules/todoListR';
import './css/todos.css';

function CH16TodoListItem(props) {
  const { todo } = props;
  const dispatch = useDispatch();

  return (
    <tr>
      <td>{todo.id}</td>
      <td>
        <span className={todo.done ? 'done' : undefined}>{todo.text}</span>
      </td>
      <td>
        <button className="btn btn-primary" onClick={() => dispatch(updateAction(todo.id))}>
          Complete
        </button>
      </td>
      <td>
        <button className="btn btn-danger" onClick={() => dispatch(deleteAction(todo.id))}>
          Delete
        </button>
      </td>
    </tr>
  );
}

export default React.memo(CH16TodoListItem);
