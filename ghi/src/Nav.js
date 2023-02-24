import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { getUser, useAuthContext } from "./auth";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import './Nav.css';

function Nav() {
  const [username, setUsername] = useState("");
  const { token, setToken } = useAuthContext();

  useEffect(() => {
    getUsername();
  }, [token]);

  const getUsername = async () => {
    const username = await getUser();
    setUsername(username);
  };

  return (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark navbar-custom">
  <div className="container-fluid" >
    <a className="navbar-brand" href="/">NETSTIX</a>
    <div className="d-flex justify-content-center">
     <form className="d-flex" action="/games" method="get">
        <div className="input-group">
          <span className="input-group-text">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </span>
          <label htmlFor="header-search" className="visually-hidden">
            <span>Search games</span>
          </label>
          <input
            className="form-control"
            type="text"
            id="header-search"
            placeholder="Search games"
            name="search"
          />
        </div>
      </form>
    </div>
    <div className="d-flex justify-content-end">
      <ul className="navbar-nav mb-2 mb-lg-0">
        {!token ? (
          <>
            <li className="nav-item">
              <NavLink className="nav-link" to="/signup">
                SIGN UP
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/login">
                LOGIN
              </NavLink>
            </li>
          </>
        ) : (
          <>
            <li className="nav-item">
              <NavLink className="nav-link" to="/logout">
                LOGOUT
              </NavLink>
            </li>
            <li className="nav-item">
              <div className="nav-link">Welcome, {username}!</div>
            </li>
          </>
        )}
      </ul>
    </div>
  </div>
</nav>
  );
}
export default Nav;
