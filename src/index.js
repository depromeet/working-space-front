import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import RootStore from './stores';
import MainPage from './pages/MainPage';

ReactDOM.render(
	<Provider rootStore={RootStore}>
		<BrowserRouter>
			<Switch>
				<Route path="/" exact component={MainPage} />
			</Switch>
		</BrowserRouter>
	</Provider>,
	document.getElementById('root'),
);
