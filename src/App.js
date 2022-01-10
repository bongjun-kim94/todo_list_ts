"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var React = require("react");
var Header_1 = require("./component/Header");
var TodoList_1 = require("./component/TodoList");
var CreateTodo_1 = require("./component/CreateTodo");
var styled_components_1 = require("styled-components");
var useState = React.useState, useRef = React.useRef, useCallback = React.useCallback;
var TodoTemplate = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\twidth: 500px;\n\tmargin: 0 auto;\n\tborder: 1px solid black;\n"], ["\n\twidth: 500px;\n\tmargin: 0 auto;\n\tborder: 1px solid black;\n"])));
var App = function () {
    var _a = useState([
        {
            id: 1,
            text: 'todo sample',
            checked: false
        },
    ]), todos = _a[0], setTodos = _a[1];
    var id = todos[0], text = todos[1];
    var _b = useState(text), newText = _b[0], setNewText = _b[1];
    var nextId = useRef(2);
    var handleSubmit = useCallback(function (text) {
        var todo = {
            id: nextId.current,
            text: text,
            checked: false
        };
        setTodos(todos.concat(todo));
        nextId.current += 1;
    }, [todos]);
    var handleDelete = useCallback(function (id) {
        setTodos(todos.filter(function (todo) { return todo.id !== id; }));
    }, [todos]);
    var handleUpdate = function () {
        setTodos(todos.map(function (todo) { return (__assign(__assign({}, todo), { text: todo.id === id ? newText : todo.text })); }));
        setNewText(newText);
    };
    var handleCheck = useCallback(function (id) {
        setTodos(todos.map(function (todo) {
            return todo.id === id ? __assign(__assign({}, todo), { checked: !todo.checked }) : todo;
        }));
    }, [todos]);
    return (<>
			<TodoTemplate>
				<Header_1["default"] todos={todos}/>
				<CreateTodo_1["default"] handleSubmit={handleSubmit}/>
				<TodoList_1["default"] todos={todos} handleDelete={handleDelete} handleUpdate={handleUpdate} handleCheck={handleCheck}/>
			</TodoTemplate>
		</>);
};
exports["default"] = React.memo(App);
x;
var templateObject_1;
