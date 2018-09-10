import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./App";
import Home from "./pages/home";
import Contact from "./pages/contact";
export default () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/home" component={Home} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </BrowserRouter>
  );
};
