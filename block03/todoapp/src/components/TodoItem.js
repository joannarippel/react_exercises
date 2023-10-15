import React from 'react';
import '../App.css'

const TodoItem = ({ todo, onToggleComplete, onRemoveTodo }) => {
  return (
    <li className="todo-item">
      <span className={`mark-done ${todo.completed ? 'completed' : ''}`}
        onClick={() => onToggleComplete(todo.id)}>
        {todo.completed ? '☑' : '☐'}
      </span>
      <span className={`todo-text ${todo.completed ? 'completed' : ''}`}
        onClick={() => onToggleComplete(todo.id)}>
        {todo.text}
      </span>
      <span className="remove-todo" onClick={() => onRemoveTodo(todo.id)}>
        x
      </span>
    </li>
  );
};

export default TodoItem;