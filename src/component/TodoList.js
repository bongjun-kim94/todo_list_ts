"use strict";
exports.__esModule = true;
var React = require("react");
var TodoListItem_1 = require("./TodoListItem");
var memo = React.memo;
var TodoList = memo(function (_a) {
    var todos = _a.todos, handleDelete = _a.handleDelete, handleUpdate = _a.handleUpdate, handleCheck = _a.handleCheck;
    return (<>
			<div>
				{todos.map(function (todo) { return (<TodoListItem_1["default"] todo={todo} key={todo.id} handleDelete={handleDelete} handleUpdate={handleUpdate} handleCheck={handleCheck}/>); })}
			</div>
		</>);
});
exports["default"] = TodoList;
