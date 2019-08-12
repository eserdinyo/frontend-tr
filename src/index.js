import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';

import createSagaMiddleware from 'redux-saga'
import { Provider } from 'react-redux';

import App from './routes';
import './style/style.scss';
import sagas from './sagas';
import rootReducer from './store';

const sagaMiddleware = createSagaMiddleware()

const store = createStore(rootReducer, compose(
    applyMiddleware(sagaMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
))

sagaMiddleware.run(sagas)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));