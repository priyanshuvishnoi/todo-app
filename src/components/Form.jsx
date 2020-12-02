import React from 'react';

const Form = ({ setInputText, todos, setTodos, inputText }) => {
  const InputTextHandler = event => setInputText(event.target.value);
  const submitTodoHandler = event => {
    event.preventDefault();
    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random() * 1000 },
    ]);
    setInputText('');
  };
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
        <select name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
