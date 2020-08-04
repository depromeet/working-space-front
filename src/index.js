import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "mobx-react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import resetCss from "reset-css";
import { createGlobalStyle } from "styled-components";
import RootStore from "./stores";
import MainPage from "./pages/MainPage";
import MapPage from "./pages/MapPage";
import DetailPage from "./pages/DetailPage";

const GlobalStyle = createGlobalStyle`
	${resetCss};
	button {
		border: none;
		padding: 0;
	}
`;

ReactDOM.render(
  <Provider rootStore={RootStore}>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={MainPage} />
        <Route path="/map" exact component={MapPage} />
        <Route path="/detail/:id" exact component={DetailPage} />
      </Switch>
    </BrowserRouter>
    <GlobalStyle />
  </Provider>,
  document.getElementById("root"),
);
