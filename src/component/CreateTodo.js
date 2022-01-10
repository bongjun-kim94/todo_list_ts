"use strict";
exports.__esModule = true;
var React = require("react");
var core_1 = require("@material-ui/core");
var icons_1 = require("@material-ui/icons");
var useState = React.useState, useRef = React.useRef, useEffect = React.useEffect, useCallback = React.useCallback;
var CreateTodo = function (_a) {
    var handleSubmit = _a.handleSubmit;
    var _b = useState(''), value = _b[0], setValue = _b[1];
    var inputRef = useRef();
    var handleChange = useCallback(function (e) {
        setValue(e.target.value);
    }, []);
    var onSubmit = useCallback(function (e) {
        e.preventDefault();
        if (!value)
            return;
        handleSubmit(value);
        setValue('');
        console.log('onSubmit');
    }, [handleSubmit, value]);
    useEffect(function () {
        inputRef.current.focus();
    }, []);
    return (<div>
			<form onSubmit={onSubmit} style={{ display: 'flex', margin: 10 }}>
				<core_1.InputBase ref={inputRef} value={value} onChange={handleChange} sx={{ ml: 1, flex: 1 }} placeholder="할 일을 입력하세요." inputProps={{
            'aria-label': 'Description'
        }} style={{ width: '90%' }} autoFocus required/>
				<core_1.IconButton aria-label="Add" type="submit">
					<icons_1.Add />
				</core_1.IconButton>
			</form>
		</div>);
};
exports["default"] = CreateTodo;
