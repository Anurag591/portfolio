import React from 'react';
import { Route } from 'react-router-dom';
import Home from './components/home';
import About from './components/about';
import Resume from './components/resume';
import Skills from './components/skills';
import Projects from './components/projects';
import Contact from './components/contact';

function Routing() {
    return (
        <React.Fragment>
          <Route path='/' exact component={Home} ></Route>
          <Route path='/about' component={About} ></Route>
          <Route path='/resume' component={Resume} ></Route>
          <Route path='/projects' component={Projects} ></Route>
          <Route path='/skills' component={Skills} ></Route>
          <Route path='/contact' component={Contact} ></Route>
        </React.Fragment>
    )
}

export default Routing;