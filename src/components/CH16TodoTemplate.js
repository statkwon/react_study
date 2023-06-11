import React from 'react';
import CH16TodoList from './CH16TodoList';
import CH16TodoForm from './CH16TodoForm';

function CH16TodoTemplate(props) {
  return (
    <div>
      <h2>CH16TodoTemplate</h2>
      <CH16TodoForm />
      <CH16TodoList />
    </div>
  );
}

export default CH16TodoTemplate;
