import React, { useCallback, useRef, useState } from "react";
import CH10TodoForm from "./CH10TodoForm";
import CH10TodoList from "./CH10TodoList";

const makeTodo = () => {
  const todos = [];
  for (let i = 1; i <= 5; i++) {
    todos.push({ id: i, text: "할 일", done: false });
  }
  return todos;
};

function CH10TodoTemplate() {
  const [todoList, setTodoList] = useState(makeTodo());
  const cnt = useRef(6);

  const addTodo = useCallback((text) => setTodoList((todoList) => todoList.concat({ id: cnt.current++, text: text, done: false })), []);
  const updateTodo = useCallback((id) => {
    setTodoList((todoList) => {
      const todos = todoList.map((value) => {
        if (value.id === id) return { ...value, done: !value.done };
        else return value;
      });
      return todos;
    });
  }, []);
  const deleteTodo = useCallback((id) => setTodoList((todoList) => todoList.filter((value) => value.id !== id)), []);

  return (
    <div>
      <h2>CH10TodoTemplate</h2>
      <CH10TodoForm addTodo={addTodo} />
      <CH10TodoList todoList={todoList} updateTodo={updateTodo} deleteTodo={deleteTodo} />
    </div>
  );
}

export default CH10TodoTemplate;
