import React, { lazy, Suspense } from 'react';
import { Route } from 'react-router-dom';

const Home = lazy(() => import('./components/home'));
const About = lazy(() => import('./components/about'));
const Skills = lazy(() => import('./components/skills'));
const Projects = lazy(() => import('./components/projects'));

function Routing() {
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <Route path='/' exact component={Home} ></Route>
        <Route path='/about' component={About} ></Route>
        <Route path='/projects' component={Projects} ></Route>
        <Route path='/skills' component={Skills} ></Route>
      </Suspense>
    )
}

export default Routing;