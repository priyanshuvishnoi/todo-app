import React from 'react';

const Form = ({ setInputText, todos, setTodos, inputText, setStatus }) => {
  const InputTextHandler = event => setInputText(event.target.value);
  const submitTodoHandler = event => {
    event.preventDefault();
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
  const statusHandler = event => setStatus(event.target.value);
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
