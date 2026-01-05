import React, { useState } from 'react';
import './TodoForm.css';

function TodoForm({ addTodo }) {
  const [input, setInput] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Input validation
    if (!input.trim()) {
      setError('Please enter a task!');
      return;
    }

    if (input.trim().length < 3) {
      setError('Task must be at least 3 characters long');
      return;
    }

    if (input.trim().length > 100) {
      setError('Task must be less than 100 characters');
      return;
    }

    // Add the todo and reset form
    addTodo(input.trim());
    setInput('');
    setError('');
  };

  const handleChange = (e) => {
    setInput(e.target.value);
    // Clear error when user starts typing
    if (error) setError('');
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <div className="input-container">
        <input
          type="text"
          placeholder="Add a new task..."
          value={input}
          onChange={handleChange}
          className={error ? 'error' : ''}
        />
        <button type="submit">Add</button>
      </div>
      {error && <p className="error-message">{error}</p>}
    </form>
  );
}

export default TodoForm;
