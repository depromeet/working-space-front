import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "mobx-react";
import RootStore from "./stores";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";

ReactDOM.render(
  <Provider rootStore={RootStore}>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={MainPage} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
