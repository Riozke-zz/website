import React from 'react';
import { NavLink } from 'react-router-dom'

const Header = () => (
    <div className="header">
        <h1 className="header__title">GITHUB</h1>
        <div>
            <NavLink to="/" className="header__menu" activeClassName="is-active" exact={true}>Home</NavLink>
            <NavLink to="/search" className="header__menu" activeClassName="is-active">Search</NavLink>
            <NavLink to="/help" className="header__menu" activeClassName="is-active">SOS Page</NavLink>        
        </div>
        
    </div>    
);

export default Header;