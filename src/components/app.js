import React from 'react';
import Home from '../containers/home';
import AllData from '../containers/allData';
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
        <Route exact path="/allData" component={AllData}/>
    </div>
);

export default App;
