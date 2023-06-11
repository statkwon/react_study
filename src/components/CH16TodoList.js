import React from 'react';
import { useSelector } from 'react-redux';
import CH16TodoListItem from './CH16TodoListItem';

function CH16TodoList(props) {
  const { todoList } = useSelector((state) => state.todoListR);

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th style={{ width: '10%' }}>ID</th>
            <th>Todo</th>
            <th style={{ width: '10%' }}>Complete</th>
            <th style={{ width: '10%' }}>Delete</th>
          </tr>
        </thead>
        <tbody>
          {todoList.map((todo) => (
            <CH16TodoListItem key={todo.id} todo={todo} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CH16TodoList;
