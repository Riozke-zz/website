import React from 'react';
import { NavLink } from 'react-router-dom'

const Header = () => (
    <div >
    <NavLink to="/" className="header-title" activeClassName="is-active" exact={true}><h1 className="header-title">GITHUB</h1></NavLink>
        <div className="menu">            
            <NavLink to="/home" className="header__menu" activeClassName="is-active" >Home</NavLink>
            <NavLink to="/search" className="header__menu" activeClassName="is-active">Search</NavLink>
            <NavLink to="/social" className="header__menu" activeClassName="is-active">Social</NavLink>        
        </div>        
    </div>    
);

export default Header;