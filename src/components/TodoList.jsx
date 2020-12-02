import React from 'react';
import Todo from './Todo';

const TodoList = ({ setInputText, todos, setTodos, inputText }) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {todos.map(todo => (
          <Todo text={todo.text} key={todo.id} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
