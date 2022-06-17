import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Counter from './Counter/Counter';
import Store from './Counter/Store';
import * as Util from './Util';
import TodoRender from './TodoList'
import { render } from '@testing-library/react';

console.log(Util.getType(''));
console.log(Util.getType([]));
console.log(Util.getType(null));
console.log(Util.getType(undefined));
console.log(Util.getType());
console.log(Util.getType(function x(){}));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// root.render(
//   <Provider store={Store}>
//     <Counter />
//   </Provider>
// )

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

// TodoRender(root);
