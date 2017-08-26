import React from 'react';
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';
import createLogger from 'redux-logger';
import App from './components/app';
import {BrowserRouter as Router} from 'react-router-dom';
import Store from './store/index';

ReactDOM.render(
    <Provider store={Store}>
       <Router>
        <App />
      </Router>
    </Provider>,
    document.getElementById('root')
);
