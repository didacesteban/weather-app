import React from 'react';
import Home from '../containers/home';
import Menu from './menu';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const App = () => (
    <div>
        <Menu />
        <Route exact path="/" component={Home}/>
    </div>
);

export default App;
