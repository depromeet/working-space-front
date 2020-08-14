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
  html, body {
    height: 100%;
  }
  #root {
    width: 100%;
    height: 100%;
    font-family: 'Spoqa Han Sans', sans-serif;
    font-weight: normal;
    overflow: auto;
  }
	button {
		border: none;
		padding: 0;
    font-family: 'Spoqa Han Sans', sans-serif;
	}
  ::-webkit-scrollbar {
    display: none;
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
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
