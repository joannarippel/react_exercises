import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, onToggleComplete, onRemoveTodo }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggleComplete={onToggleComplete}
          onRemoveTodo={onRemoveTodo}
        />
      ))}
    </ul>
  );
};

export default TodoList;
