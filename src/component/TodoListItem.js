"use strict";
exports.__esModule = true;
var React = require("react");
var core_1 = require("@material-ui/core");
var icons_1 = require("@material-ui/icons");
var useState = React.useState, useRef = React.useRef, useEffect = React.useEffect, memo = React.memo;
var TodoListItem = memo(function (_a) {
    var todo = _a.todo, handleDelete = _a.handleDelete, handleUpdate = _a.handleUpdate, handleCheck = _a.handleCheck;
    var id = todo.id, text = todo.text, checked = todo.checked;
    // 수정모드인지 확인
    var _b = useState(false), edit = _b[0], setEdit = _b[1];
    // 새로운 text값
    var _c = useState(text), newText = _c[0], setNewText = _c[1];
    var editInput = useRef(null);
    useEffect(function () {
        if (edit) {
            editInput.current.focus();
        }
    }, [edit]);
    var onEditClick = function () {
        console.log('onUpdate');
        setEdit(true);
    };
    var onChangeEditInput = function (e) {
        setNewText(e.target.value);
    };
    var onSubmitClick = function () {
        console.log('onUpdateSubmit');
        handleUpdate(text);
        setEdit(false);
    };
    var onRemove = function () {
        console.log('onRemove');
        handleDelete(id);
    };
    var onCheck = function () {
        console.log('onCheck');
        handleCheck(id);
    };
    return (<>
				<core_1.Card>
					<core_1.List sx={{
            width: 200,
            height: 230,
            bgcolor: 'background.paper',
            overflow: 'auto'
        }} dense component="div" role="list">
						<core_1.ListItem role="listitem" button>
							<core_1.ListItemIcon>
								<core_1.Checkbox tabIndex={-1} disableRipple onClick={onCheck}/>
							</core_1.ListItemIcon>
							{edit ? (<core_1.InputBase type="text" ref={editInput} value={newText} onChange={onChangeEditInput} style={{
                width: '90%',
                fontSize: '14px',
                fontextDecoration: checked === true ? 'line-through' : null,
                color: checked === true ? '#ccc' : '#000'
            }} autoFocus required/>) : (<core_1.ListItemText style={{
                textDecoration: checked === true ? 'line-through' : null,
                color: checked === true ? '#ccc' : '#000'
            }}>
									{newText}
								</core_1.ListItemText>)}
							{/* <IconButton color="secondary" aria-label="Delete"> */}
							{/* 완료한 일은 수정 불가하게 null 처리 */}
							{!checked === true ? (edit ? (<core_1.IconButton color="secondary" aria-label="Delete" onClick={onSubmitClick}>
										<icons_1.SaveOutlined fontSize="small"/>
									</core_1.IconButton>) : (<core_1.IconButton color="secondary" aria-label="Delete" onClick={onEditClick}>
										<icons_1.Create fontSize="small"/>
									</core_1.IconButton>)) : null}
							{/* </IconButton> */}
							<core_1.IconButton color="secondary" aria-label="Delete" onClick={onRemove}>
								<icons_1.Clear fontSize="small"/>
							</core_1.IconButton>
						</core_1.ListItem>
					</core_1.List>
				</core_1.Card>
			</>);
});
exports["default"] = React.memo(TodoListItem);
