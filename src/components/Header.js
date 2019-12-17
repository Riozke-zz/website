import React from 'react';
import { NavLink } from 'react-router-dom'

const Header = () => (
    <div >
    <NavLink to="/" className="headerTitle" activeClassName="is-active" exact={true}><h1 className="headerTitle">GITHUB</h1></NavLink>
        <div className="menu">            
            <NavLink to="/home" className="header__menu" activeClassName="is-active" >Home</NavLink>
            <NavLink to="/search" className="header__menu" activeClassName="is-active">Search</NavLink>
            <NavLink to="/help" className="header__menu" activeClassName="is-active">SOS Page</NavLink>        
        </div>
        
    </div>    
);

export default Header;