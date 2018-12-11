import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';
import { BrowserRouter, Route } from "react-router-dom";
import App from './components/App';

import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './reducers';


ReactDOM.render(
<Provider store={createStore(reducers, { })}>
    <BrowserRouter>
        <Route path="/" component={App} />
    </BrowserRouter>
</Provider>
, document.getElementById('root'));


