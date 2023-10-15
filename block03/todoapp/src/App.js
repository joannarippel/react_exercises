import React, { useState } from 'react';
import './App.css';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([]);
  const [inputText, setInputText] = useState('');

  const handleAddTodo = () => {
    if (inputText.trim() === '') return;
    setTodos([...todos, { id: Date.now(), text: inputText, completed: false }]);
    setInputText('');
  };

  const handleRemoveTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const handleToggleComplete = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const handleMarkAllDone = () => {
    const updatedTodos = todos.map((todo) => ({
      ...todo,
      completed: true,
    }));
    setTodos(updatedTodos);
  };

  return (
    <div className="App">
      <h1 className="text-center">Todo List App</h1>
      <div className="input-container">
        <input type="text" placeholder="Add a new todo" value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === 'Enter') handleAddTodo();
          }}
        />
        <button className="button add-button" onClick={handleAddTodo}>
          Add
        </button>
        <div className="button-separator"></div>
        <button className="button mark-all-done-button" onClick={handleMarkAllDone}>
          Mark All Done
        </button>
      </div>
      <TodoList todos={todos} onToggleComplete={handleToggleComplete} onRemoveTodo={handleRemoveTodo} />
    </div>
  );
   
  
}

export default App;