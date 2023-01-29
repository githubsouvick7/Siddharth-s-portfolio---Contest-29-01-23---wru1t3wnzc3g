import React from 'react'
import '../styles/App.css';
// import { BrowserRouter as Router, Route,Link,Switch } from 'react-router-dom';
// import { BrowserRouter as Router, Route, Switch, Redirect, NavLink, Link } from 'react-router-dom';
import Info from './Info';
import Blog from './Blog';
import Home from './Home';
import { Route, Routes } from 'react-router-dom';
const App = () => {

  return (
    <div id="main">


      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path='/blog' exact element={<Blog />} />
        <Route path='/info' exact element={<Info />} />

      </Routes>
    </div>
  )
}


export default App;
