import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import HomePage from '../components/HomePage';
import PushProjectPage from '../components/SearchProfilePage';
import HelpPage from '../components/HelpPage';
import SOSPage from '../components/ErrorPage';
import Header from '../components/Header';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={HomePage} exact={true}/>
                <Route path="/addProject" component={PushProjectPage}/>   
                <Route path="/help" component={HelpPage}/>
                <Route component={SOSPage}/>    
            </Switch>
        </div>        
    </BrowserRouter>
);

export default AppRouter;