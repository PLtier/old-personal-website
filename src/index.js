import React from "react";
import ReactDOM from "react-dom";
import App from "./app";

const MainApp = () => (
	<div>
		<App />
	</div>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<MainApp />, rootElement);
