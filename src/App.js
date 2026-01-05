import React, { useState, useEffect } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  // State to store all todos
  const [todos, setTodos] = useState([]);
  // State for filter - 'all' or 'incomplete'
  const [filter, setFilter] = useState('all');

  // Load todos from localStorage when app starts
  useEffect(() => {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos));
    }
  }, []);

  // Save todos to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  // Function to add a new todo
  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text: text,
      completed: false,
      createdAt: new Date().toISOString()
    };
    setTodos([...todos, newTodo]);
  };

  // Function to toggle todo completion status
  const toggleComplete = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  // Function to delete a todo
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  // Filter todos based on selected filter
  const getFilteredTodos = () => {
    if (filter === 'incomplete') {
      return todos.filter(todo => !todo.completed);
    }
    return todos;
  };

  const filteredTodos = getFilteredTodos();

  return (
    <div className="App">
      <div className="container">
        <h1>My To-Do List</h1>
        
        <TodoForm addTodo={addTodo} />

        {/* Filter buttons */}
        <div className="filter-buttons">
          <button 
            className={filter === 'all' ? 'active' : ''}
            onClick={() => setFilter('all')}
          >
            All Tasks ({todos.length})
          </button>
          <button 
            className={filter === 'incomplete' ? 'active' : ''}
            onClick={() => setFilter('incomplete')}
          >
            Incomplete ({todos.filter(t => !t.completed).length})
          </button>
        </div>

        <TodoList 
          todos={filteredTodos}
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
        />

        {todos.length === 0 && (
          <p className="empty-message">No tasks yet. Add one to get started!</p>
        )}
      </div>
    </div>
  );
}

export default App;
