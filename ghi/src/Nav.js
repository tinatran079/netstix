import { NavLink } from 'react-router-dom';
import {useState} from 'react';
import { useToken } from './auth'



function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
            <NavLink className="nav-link" to="/">Main Page</NavLink>
        </li>
        <li className="nav-item">
            <NavLink className="nav-link" to="/signup">Sign Up</NavLink>
        </li>
        <li className="nav-item">
            <NavLink className="nav-link" to="/login">Login</NavLink>
        </li>
        <li className="nav-item">
            <NavLink className="nav-link" to="/logout">Logout</NavLink>
        </li>
        </ul>
        <div>
      <h2>
        <form action="/games" method="get">
          <label htmlFor="header-search" className="center">
              <span className="visually-hidden">Search games</span>
          </label>
          <input
              type="text"
              id="header-search"
              placeholder="Search games"
              name="search"
          />
          <button type="submit">Search</button>
        </form>
      </h2>
      </div>
    </nav>
  )
}

export default Nav;
