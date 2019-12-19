import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import HomePage from '../components/HomePage';
import SearchProfilePage from '../components/SearchProfilePage';
import SocialPage from '../components/SocialPage';
import ErrorPage from '../components/ErrorPage';
import Header from '../components/Header';
import LandingPage from '../components/LandingComponent/LandingPage';

const AppRouter = () => (
    <BrowserRouter>
        <div> 
            <Header />
            <Switch>
                <Route path="/" component={LandingPage} exact={true}/>
                <Route path="/home" component={HomePage} />                
                <Route path="/search" component={SearchProfilePage}/>   
                <Route path="/social" component={SocialPage}/>
                <Route component={ErrorPage}/>    
            </Switch>
        </div>        
    </BrowserRouter>
);

export default AppRouter;