import React from 'react';
import { Route } from 'react-router-dom';
import Home from './components/home';
import About from './components/about';
import Skills from './components/skills';
import Projects from './components/projects';

function Routing() {
    return (
        <React.Fragment>
          <Route path='/' exact component={Home} ></Route>
          <Route path='/about' component={About} ></Route>
          <Route path='/projects' component={Projects} ></Route>
          <Route path='/skills' component={Skills} ></Route>
        </React.Fragment>
    )
}

export default Routing;