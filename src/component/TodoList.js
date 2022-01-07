import React from 'react';
import TodoListItem from './TodoListItem';

const TodoList = ({ todos, handleDelete }) => {
    return (
        <>
            <div>
                {todos.map((todo) => (
                    <TodoListItem
                        todo={todo}
                        key={todo.id}
                        handleDelete={handleDelete}
                    />
                ))}
            </div>
        </>
    );
}

export default TodoList;