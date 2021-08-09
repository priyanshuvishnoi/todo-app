import React from 'react';
import type { TodoType } from '../App';

export type TodoPropsType = {
  text: string;
  todo: TodoType;
  todos: TodoType[];
  setTodos: React.Dispatch<React.SetStateAction<TodoType[]>>;
};

const Todo: React.FC<TodoPropsType> = ({ text, todo, todos, setTodos }) => {
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

  const editHandler = () => {
    let newText = prompt('Enter new text');
    if (!newText || newText[0] === ' ') {
      alert('Cannot set empty text!!!');
    } else {
      setTodos(
        todos.map(item => {
          if (item.id === todo.id) {
            return {
              ...item,
              text: newText!,
            };
          }
          return item;
        })
      );
    }
  };

  return (
    <div className="todo">
      <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
        {text}
      </li>
      <button className="complete-btn" onClick={completeHandler}>
        <i className="fas fa-check"></i>
      </button>
      <button className="edit-btn" onClick={editHandler}>
        <i className="fas fa-edit"></i>
      </button>
      <button className="trash-btn" onClick={deleteHandler}>
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default Todo;
