import React from 'react';
import { TodoType } from '../App';

export type TodoPropsType = {
  text: string;
  todo: TodoType;
  todos: TodoType[];
  setTodos: Function;
};

const Todo = ({ text, todo, todos, setTodos }: TodoPropsType) => {
  const deleteHandler = () =>
    setTodos(todos.filter(element => element.id !== todo.id));

  const completeHandler = () => {
    setTodos(
      todos.map(item => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };

  return (
    <div className="todo">
      <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
        {text}
      </li>
      <button className="complete-btn" onClick={completeHandler}>
        <i className="fas fa-check"></i>
      </button>
      <button className="trash-btn" onClick={deleteHandler}>
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default Todo;
