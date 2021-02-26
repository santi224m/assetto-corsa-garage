import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import  { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';
import reducers from './reducers';
import './main.css';
import './mobile.css';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(reduxThunk)))

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));