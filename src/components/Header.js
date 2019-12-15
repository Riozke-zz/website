import React from 'react';
import { NavLink } from 'react-router-dom'

const Header = () => (
    <header>
        <h1>Portfolio</h1>
        <NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink>
        <NavLink to="/addProject" activeClassName="is-active">Save Project</NavLink>
        <NavLink to="/help" activeClassName="is-active">SOS Page</NavLink>
    </header>
);

export default Header;