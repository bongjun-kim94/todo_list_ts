"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var React = require("react");
var styled_components_1 = require("styled-components");
var HeaderA = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tbackground-color: rgb(153, 204, 255);\n\tpadding: 10px;\n\tborder-bottom: 1px solid black;\n\tp:nth-of-type(2) {\n\t\tfont-size: 16px;\n\t}\n\tp,\n\th1 {\n\t\tmargin: 0 10px;\n\t\tfont-size: 20px;\n\t}\n"], ["\n\tbackground-color: rgb(153, 204, 255);\n\tpadding: 10px;\n\tborder-bottom: 1px solid black;\n\tp:nth-of-type(2) {\n\t\tfont-size: 16px;\n\t}\n\tp,\n\th1 {\n\t\tmargin: 0 10px;\n\t\tfont-size: 20px;\n\t}\n"])));
function Header(_a) {
    var todos = _a.todos;
    var today = new Date();
    var todayYear = today.getFullYear();
    var todayMonth = today.getMonth() + 1;
    var todayDate = today.getDate();
    var week = ['일', '월', '화', '수', '목', '금', '토'];
    var dayWeek = week[today.getDay()];
    var workEx = todos.filter(function (todo) { return !todo.checked; });
    return (<>
			<HeaderA className="header">
				<p>{todayYear + '년' + todayMonth + '월' + todayDate + '일'}</p>
				<p>{dayWeek + '요일'}</p>
				<br />
				<h1>할 일 - {workEx.length}개</h1>
			</HeaderA>
		</>);
}
exports["default"] = Header;
var templateObject_1;
