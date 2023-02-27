import { NavLink, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { getUser, useAuthContext } from "./auth";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import './Nav.css';

function Nav({ onSearch }) {
  const [username, setUsername] = useState("");
  const { token, setToken } = useAuthContext();
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    getUsername();
  }, [token]);

  const getUsername = async () => {
    const username = await getUser();
    setUsername(username);
  };

  function handleSubmit(event) {
    event.preventDefault();
    navigate(`/search/${query}`);
    onSearch(query);
  }

  return (
  <nav className="navbar navbar-expand-lg navbar-custom">
  <div className="container-fluid" >
    <a className="navbar-brand" href="/">NETSTIX</a>
    <div className="d-flex justify-content-center">
      <form className="d-flex" onSubmit={handleSubmit}>
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search games..."
            aria-label="Search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
          <button className="btn" type="submit">
            Search
          </button>
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
