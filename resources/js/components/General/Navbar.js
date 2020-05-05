import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles/Navbar.css';

const Navbar = (props) => (
    <div className="Navbar">
        <NavLink exact to="/" className="logo">
            Inicio
        </NavLink>

        <NavLink 
            to="/categories" 
            activeClassName="active"
            isActive={(match, location) => {
                if(location.pathname.includes("category")||location.pathname.includes("categories")) return true;
            }}>
            Categorías
        </NavLink>

        <NavLink 
            to="/exercises" 
            activeClassName="active"
            isActive={(match, location) => {
                if(location.pathname.includes("exercise")) return true;
            }}>
            Ejercicios
        </NavLink>

        <NavLink 
            to="/routines" 
            activeClassName="active"
            isActive={(match, location) => {
                if(location.pathname.includes("routine")) return true;
            }}>
            Rutinas
        </NavLink>
    </div>
);

export default Navbar;