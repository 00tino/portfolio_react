import React from 'react'
import { Link, NavLink, Navigate } from 'react-router-dom'

export const HeaderNav = () => {
  return (
    <header className="header">
        <Link to="/home" >
            <div className="logo">
                <span>V</span>
                <h3>Valentino Fonteviva</h3>
            </div>
        </Link>
        <nav>
            <ul>
                <li>
                    <NavLink to="/Home" className={({isActive}) => isActive ? "active" : ""} >Home</NavLink>
                </li>
                <li>
                    <NavLink to="/portfolio" className={({isActive}) => isActive ? "active" : ""} >Portfolio</NavLink>
                </li>
                <li>
                    <NavLink to="/services" className={({isActive}) => isActive ? "active" : ""} >Services</NavLink>
                </li>
                <li>
                    <NavLink to="/cv" className={({isActive}) => isActive ? "active" : ""} >Cv</NavLink>
                </li>
                <li>
                    <NavLink to="/contact" className={({isActive}) => isActive ? "active" : ""} >Contact</NavLink>
                </li>
            </ul>
        </nav>
    </header>
  )
}
