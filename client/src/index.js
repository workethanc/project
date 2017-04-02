import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
/*Redux*/
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
// reducer folder
import reducers from 'reducers';
import thunk from 'redux-thunk';

import { App } from 'containers';



const rootElement = document.getElementById('root');

ReactDOM.render(
	<App />, rootElement
);