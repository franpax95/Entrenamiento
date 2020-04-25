import React, { Component } from 'react';
import './styles/Navbar.css';
import { NavLink } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
        <div className="Navbar flex flex-row justifyc alignc">
            <NavLink exact to="/" className="logo">
                Inicio
            </NavLink>

            <div className="links flex flex-row justifyc alignc">
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
        </div>
    )
  }
}

export default Navbar;