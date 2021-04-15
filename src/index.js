import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';
import reducers from './reducers';
import './style/global.css';
import './style/utilities.css';
import './style/components/navbar.css';
import './style/components/home.css';
import './style/components/filter-pages.css';
import './style/components/brands-page.css';
import './style/components/carClassFilters.css';
import './style/components/card.css';
import './style/components/pagination.css';
import './style/components/filters.css';
import './style/components/sortDropdown.css';
import './style/components/carListGrid.css';
import './style/components/footer.css';
import './style/components/modForm.css';
import './style/components/banner.css';
import './style/components/formReview.css';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(reduxThunk)));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
