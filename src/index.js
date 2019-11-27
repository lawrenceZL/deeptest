import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'

import App from './page/APP';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import { Provider} from 'react-redux';
import reducer from './reducers/index';
import 'antd/dist/antd.css';
import './index.css';
let store=createStore(reducer);
ReactDOM.render(<Provider store={store}><BrowserRouter><App /></BrowserRouter></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
