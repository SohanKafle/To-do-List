import React from 'react';
import './TodoItem.css';

function TodoItem({ todo, toggleComplete, deleteTodo }) {
  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <div className="todo-content">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleComplete(todo.id)}
          className="todo-checkbox"
        />
        <span className="todo-text">{todo.text}</span>
      </div>
      <button 
        className="delete-btn"
        onClick={() => deleteTodo(todo.id)}
      >
        Delete
      </button>
    </div>
  );
}

export default TodoItem;
