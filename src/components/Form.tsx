import React from 'react';
import { TodoType } from '../App';

export type FormPropsType = {
  setInputText: Function;
  todos: TodoType[];
  setTodos: Function;
  inputText: string;
  setStatus: Function;
};

const Form = ({
  inputText,
  setInputText,
  setStatus,
  setTodos,
  todos,
}: FormPropsType) => {
  const InputTextHandler = (event: React.ChangeEvent<HTMLInputElement>) =>
    setInputText(event.target.value);

  const submitTodoHandler = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault()
    setTodos([
      ...todos,
      {
        text: inputText,
        completed: false,
        id: Math.floor(Math.random() * 1000) + 1,
      },
    ]);
    setInputText('');
  };

  const statusHandler = (event: React.ChangeEvent<HTMLSelectElement>) =>
    setStatus(event.target.value);

  return (
    <form>
      <input
        type="text"
        className="todo-input"
        onChange={InputTextHandler}
        value={inputText}
      />
      <button className="todo-button" type="submit" onClick={submitTodoHandler}>
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select name="todos" className="filter-todo" onChange={statusHandler}>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
