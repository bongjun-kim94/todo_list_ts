import React, { useState, useRef } from 'react';
import Header from './component/Header';
import TodoList from './component/TodoList';
import CreateTodo from './component/CreateTodo';

function App() {
  const [todos, setTodos] = useState([{
    id: 1,
    text: 'todo test',
    checked: false
  }]);

  const nextId = useRef(2);

  const handleSubmit = (text) => {
    const todo = {
      id: nextId.current,
      text,
      checked: false,
    };
    setTodos(todos.concat(todo));
    nextId.current += 1;
  };

  const handleDelete = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <>
      <Header />
      <CreateTodo handleSubmit={handleSubmit} />
      <TodoList todos={todos} handleDelete={handleDelete} />
    </>
  );
}

export default App;