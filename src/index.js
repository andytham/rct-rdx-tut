import React from "react";
import { render, ReactDOM } from "react-dom";
import { Provider } from "react-redux";
import store from "./js/store/index";
import App from "./components/App.js";
// ReactDOM.render(
// 	<Provider store={store}>
// 		<App />
// 	</Provider>,
// 	document.getElementById("root")
// );

const rootEl = document.getElementById('root');


render(<App />, rootEl);

if (module.hot) {
	module.hot.accept();
}