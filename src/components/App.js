import React from 'react'
import '../styles/App.css';
import { BrowserRouter as Router, Route, Switch, Redirect, NavLink, Link } from 'react-router-dom';
import Info from './info';
import Blog from './Blog';
import Home from './Home';
const App = () => {

  return (
    <div id="main">
      <Router>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path='/Blog'>
            <Blog />
          </Route>
          <Route path='/info'>
            <Info />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App;
