import React from 'react';
import { Router, Route, hashHistory } from 'react-router';

import App from '../components/App';
import NotFound from '../components/NotFound';

const Routes = ({ history }) =>
	<Router history = {history}>
		<Route path = '/' component = {App} />

	</Router>


export default Routes
