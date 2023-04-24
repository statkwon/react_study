import React from "react";
import CH10TodoListItem from "./CH10TodoListItem";

function CH10TodoList(props) {
  const { todoList, updateTodo, deleteTodo } = props;
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th style={{ width: "10%" }}>ID</th>
            <th>Todo</th>
            <th style={{ width: "10%" }}>Complete</th>
            <th style={{ width: "10%" }}>Delete</th>
          </tr>
        </thead>
        <tbody>
          {todoList.map((value) => (
            <CH10TodoListItem key={value.id} todo={value} updateTodo={updateTodo} deleteTodo={deleteTodo} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CH10TodoList;
