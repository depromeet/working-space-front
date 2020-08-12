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
  #root {
    width: 100%;
    height: 100vh;
    font-family: 'Spoqa Han Sans', sans-serif;
    font-weight: normal;
  }
	button {
		border: none;
		padding: 0;
    font-family: 'Spoqa Han Sans', sans-serif;
	}
	::-webkit-scrollbar {
    display: none;
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
