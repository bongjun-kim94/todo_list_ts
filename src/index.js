"use strict";
exports.__esModule = true;
var React = require("react");
var ReactDOM = require("react-dom");
require("./index.css");
var App_1 = require("./App");
var reportWebVitals_1 = require("./reportWebVitals");
ReactDOM.render(<React.StrictMode>
		<App_1["default"] />
	</React.StrictMode>, document.getElementById('root'));
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
(0, reportWebVitals_1["default"])();
