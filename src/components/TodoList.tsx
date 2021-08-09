import React from 'react';
import Todo from './Todo';
import { TodoType } from '../App';

export interface TodoListPropsType {
  todos: TodoType[];
  setTodos: Function;
  filteredTodos: TodoType[];
}

const TodoList = ({ todos, setTodos, filteredTodos }: TodoListPropsType) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filteredTodos.map(todo => (
          <Todo
            text={todo.text}
            key={todo.id}
            todo={todo}
            todos={todos}
            setTodos={setTodos}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
