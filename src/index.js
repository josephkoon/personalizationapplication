import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk'

import { Switch, Route, HashRouter } from 'react-router-dom';

import Survey from './components/Survey'
import Personalize from './components/Personalize'


import reducers from './reducers';


const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);


ReactDOM.render(
	<Provider store={store}>
	<HashRouter>
	<Switch>
		<Route exact path="/" component={Survey}/>
		<Route exact path="/personalize" component={Personalize}/>
	</Switch>
	</HashRouter>
	</Provider>

	, document.getElementById('root'));
registerServiceWorker();
