import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import HomePage from '../components/HomePage';
import SearchProfilePage from '../components/SearchProfilePage';
import HelpPage from '../components/HelpPage';
import ErrorPage from '../components/ErrorPage';
import Header from '../components/Header';

// Bug - Change the path of /addProject to //search

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={HomePage} exact={true}/>                
                <Route path="/search" component={SearchProfilePage}/>   
                <Route path="/help" component={HelpPage}/>
                <Route component={ErrorPage}/>    
            </Switch>
        </div>        
    </BrowserRouter>
);

export default AppRouter;