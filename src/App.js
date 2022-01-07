import React, { useState, useRef } from 'react';
import Header from './component/Header';
import TodoList from './component/TodoList';
import CreateTodo from './component/CreateTodo';
import styled from 'styled-components';

const TodoTemplate = styled.div`
  width: 500px;
  margin: 0 auto;
  border: 1px solid black;
`;

const App = () => {
  const [todos, setTodos] = useState([{
    id: 1,
    text: 'todo sample',
    checked: false
  }]);
  const [id, text] = todos;
  const [newText, setNewText] = useState(text);

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

  const handleUpdate = () => {
    setTodos(todos.map((todo) => ({
      ...todo,
      text: todo.id === id ? newText : todo.text,
    })));
    
    setNewText(newText);
  };

  const handleCheck = (id) => {
    setTodos(todos.map(todo => {
      return todo.id === id ? { ...todo, checked: !todo.checked } : todo;
    })); 
  };

  return (
    <>
      <TodoTemplate>
        <Header todos={todos} />
        <CreateTodo handleSubmit={handleSubmit}  />
        <TodoList todos={todos} handleDelete={handleDelete} handleUpdate={handleUpdate} handleCheck={handleCheck} />
      </TodoTemplate>
    </>
  );
}

export default App;