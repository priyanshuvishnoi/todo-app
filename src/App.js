import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setfilteredTodos] = useState([]);

  useEffect(() => getLocalTodos(), []);

  useEffect(() => {
    const filterHandler = () => {
      switch (status) {
        case 'completed':
          setfilteredTodos(todos.filter(todo => todo.completed === true));
          break;
        case 'uncompleted':
          setfilteredTodos(todos.filter(todo => todo.completed === false));
          break;
        default:
          setfilteredTodos(todos);
          break;
      }
    };
    filterHandler();
    const saveLocalTodos = () =>
      localStorage.setItem('todos', JSON.stringify(todos));
    saveLocalTodos();
  }, [todos, status]);

  const getLocalTodos = () => {
    if (localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem('todos'));
      setTodos(todoLocal);
    }
  };

  return (
    <div className="App">
      <header>
        <h1>Priyanshu's Todo List</h1>
      </header>
      <Form
        setInputText={setInputText}
        todos={todos}
        setTodos={setTodos}
        inputText={inputText}
        setStatus={setStatus}
      />
      <TodoList
        setInputText={setInputText}
        todos={todos}
        setTodos={setTodos}
        inputText={inputText}
        filteredTodos={filteredTodos}
      />
    </div>
  );
}

export default App;
