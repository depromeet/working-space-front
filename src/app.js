import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import resetCss from "reset-css";
import { Provider } from "mobx-react";
import { createGlobalStyle } from "styled-components";
import RootStoreContext from "./stores";
import UserIdProvider from "./containers/UserIdProvider";
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

function App() {
  return (
    <Provider store={RootStoreContext}>
      <UserIdProvider>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={MainPage} />
            <Route path="/map" exact component={MapPage} />
            <Route path="/detail/:id" exact component={DetailPage} />
          </Switch>
        </BrowserRouter>
      </UserIdProvider>
      <GlobalStyle />
    </Provider>
  );
}

export default App;
