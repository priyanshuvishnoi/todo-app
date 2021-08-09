import React from 'react';
import Todo from './Todo';
import type { TodoType } from '../App';

export type TodoListPropsType = {
  todos: TodoType[];
  setTodos: React.Dispatch<React.SetStateAction<TodoType[]>>;
  filteredTodos: TodoType[];
};

const TodoList: React.FC<TodoListPropsType> = ({
  todos,
  setTodos,
  filteredTodos,
}) => {
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
