import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/mdbootstrap/css/mdb.css';
import stockApp from './reducers'
import App from './components/App'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(stockApp, composeEnhancers(applyMiddleware(thunk)))

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
)