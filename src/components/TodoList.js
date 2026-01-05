import React from 'react';
import TodoItem from './TodoItem';
import './TodoList.css';

function TodoList({ todos, toggleComplete, deleteTodo }) {
  return (
    <div className="todo-list">
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
        />
      ))}
    </div>
  );
}

export default TodoList;
