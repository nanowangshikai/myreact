import React from 'react';
import Landingpage from "./landingpage";
import AboutMe from "./aboutme";
import Contact from './contact';
import Project from './project';
import {Switch, Route} from 'react-router-dom';


const Main = () => (
    <Switch>
        <Route exact path="/myreact" component={Landingpage} />
        <Route path = '/aboutme' component={AboutMe} />
        <Route path = '/contact' component={Contact} />
        <Route path = '/project' component={Project} />
    </Switch>
)

export default Main;