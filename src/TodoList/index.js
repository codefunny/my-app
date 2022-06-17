import React, { Component } from 'react'
import { render } from 'react-dom'
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from '@reduxjs/toolkit'
import rootReducer from './reducers'
import App from './App'

const logger = ({getState}) => {
    return (next) => (action) => {
        console.log('will dispatch',action);

        const returnValue = next(action);

        console.log('state after dispatch',getState());

        return returnValue;
    }
}

const store = createStore(rootReducer,undefined,applyMiddleware(logger));

export default function todoRender(root) {
    root.render(
        <Provider store={store}>
            <App />
        </Provider>
    );
}