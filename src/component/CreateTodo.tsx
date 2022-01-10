import * as React from 'react';
import { InputBase, IconButton } from '@material-ui/core';
import { Add } from '@material-ui/icons';

const { useState, useRef, useEffect, useCallback } = React;

const CreateTodo = ({ handleSubmit }) => {
	const [value, setValue] = useState('');
	const inputRef = useRef();

	const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value);
	}, []);

	const onSubmit = useCallback(
		(e: React.FormEvent<HTMLFormElement>) => {
			e.preventDefault();
			if (!value) return;
			handleSubmit(value);
			setValue('');
			console.log('onSubmit');
		},
		[handleSubmit, value],
	);

	useEffect(() => {
		inputRef.current.focus();
	}, []);

	return (
		<div>
			<form onSubmit={onSubmit} style={{ display: 'flex', margin: 10 }}>
				<InputBase
					ref={inputRef}
					value={value}
					onChange={handleChange}
					sx={{ ml: 1, flex: 1 }}
					placeholder="할 일을 입력하세요."
					inputProps={{
						'aria-label': 'Description',
					}}
					style={{ width: '90%' }}
					autoFocus
					required
				/>
				<IconButton aria-label="Add" type="submit">
					<Add />
				</IconButton>
			</form>
		</div>
	);
};

export default CreateTodo;
