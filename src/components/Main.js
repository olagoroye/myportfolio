import React from 'react'
import {Switch, Route} from 'react-router-dom';
import LandingPage from './LandingPage';
import Aboutme from './Aboutme';
import Projects from './Projects';
import Contact from './Contact';
import Resume from './Resume';


const Main = () => (
    <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/AboutMe" component={Aboutme} />
        <Route exact path="/Projects" component={Projects} />
        <Route exact path="/Contact" component={Contact} />
        <Route exact path="/Resume" component={Resume} />
    </Switch>
)

export default Main;
