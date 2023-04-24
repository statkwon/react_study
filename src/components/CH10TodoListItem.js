import React, { memo } from "react";
import "./css/todos.css";

function CH10TodoListItem(props) {
  const { todo, updateTodo, deleteTodo } = props;
  return (
    <tr>
      <td>{todo.id}</td>
      <td>
        <span className={todo.done ? "done" : undefined}>{todo.text}</span>
      </td>
      <td>
        <button className="btn btn-primary" onClick={() => updateTodo(todo.id)}>
          Complete
        </button>
      </td>
      <td>
        <button className="btn btn-danger" onClick={() => deleteTodo(todo.id)}>
          Delete
        </button>
      </td>
    </tr>
  );
}

// memo(Component): lets you skip re-rendering a component when its props are unchanged
export default memo(CH10TodoListItem);
