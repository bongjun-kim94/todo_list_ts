import React, { useState } from 'react';
import Header from './component/Header';
import Todo from './component/TodoList';
import AddTodoForm from './component/CreateTodo';

function App() {
  const [todos, setTodos] = useState({

  });
  return (
    <>
      <Header />
      <AddTodoForm />
      <Todo />
    </>
  );
}

export default App;