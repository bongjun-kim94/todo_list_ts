import * as React from 'react';
import Header from './component/Header';
import TodoList from './component/TodoList';
import CreateTodo from './component/CreateTodo';
import styled from 'styled-components';

const { useState, useRef, useCallback } = React;

const TodoTemplate = styled.div`
	width: 500px;
	margin: 0 auto;
	border: 1px solid black;
`;

// interface App {
//   id: number
//   text: string
//   checked: Boolean
// }

// user라는 변수는 User라는 인터페이스와 타입이 동일해야함
// interface User {
//   name: string;
//   id: number;
// }

// const user: User = {
//   name: "kim",
//   id: 10,
// }
// any(뭐든지가능), unknown(타입을 정하라고 명시), never(이 타입은 절대 안됨), void(undefined를 반환하거나 값이 없는 함수)

interface todos {
	id: number,
	text: string,
	checked: Boolean
}

const App = (): todos => {
	const [todos, setTodos] = useState([
		{
			id: 1,
			text: 'todo sample',
			checked: false,
		},
	]);

	const [id, text] = todos;
	const [newText, setNewText] = useState(text);

	const nextId = useRef(2);

	const handleSubmit = useCallback(
		(text) => {
			const todo = {
				id: nextId.current,
				text,
				checked: false,
			};
			setTodos(todos.concat(todo));
			nextId.current += 1;
		},
		[todos],
	);

	const handleDelete = useCallback(
		(id) => {
			setTodos(todos.filter((todo) => todo.id !== id));
		},
		[todos],
	);

	const handleUpdate = () => {
		setTodos(
			todos.map((todo) => ({
				...todo,
				text: todo.id === id ? newText : todo.text,
			})),
		);

		setNewText(newText);
	};

	const handleCheck = useCallback(
		(id) => {
			setTodos(
				todos.map((todo) => {
					return todo.id === id ? { ...todo, checked: !todo.checked } : todo;
				}),
			);
		},
		[todos],
	);

	return (
		<>
			<TodoTemplate>
				<Header todos={todos} />
				<CreateTodo handleSubmit={handleSubmit} />
				<TodoList
					todos={todos}
					handleDelete={handleDelete}
					handleUpdate={handleUpdate}
					handleCheck={handleCheck}
				/>
			</TodoTemplate>
		</>
	);
};

export default React.memo(App);x
