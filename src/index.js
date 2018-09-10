import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import "./index.css";
import registerServiceWorker from "./registerServiceWorker";
import { injectGlobal } from "styled-components";
// import { ThemeWrapper } from "./components/ThemeSwitcher";
// import { rbs_black, rbs_sliver, natwest_silver, natwest_black } from "./themes";
import store from "./store";
// import App from "./App";
import AppRoutes from "./routes";
injectGlobal`
  body {
    margin: 0;
    padding: 0;
    font-family: 'RN House Sans', sans-serif;
    background-color: #EEEDE9;
  }
`;

ReactDOM.render(
  <Provider store={store}>
    <AppRoutes />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
