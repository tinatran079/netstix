import React, { useState, useEffect } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { useToken, getUser } from "./auth";
import background from "./images/background.png";
import "./login.css";

function LoginForm() {
  const [token, login] = useToken();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  async function HandleSubmit(e) {
    e.preventDefault();
    login(email, password);
  }
  return (
    <div className="login" style={{ backgroundImage: `url(${background})` }}>
      <div className="overlay">
        <form className="form" onSubmit={HandleSubmit}>
          <h3>Log in</h3>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="email@email.com"
            value={email}
            onChange={handleEmailChange}
            required
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
          <button type="submit" className="button">
            Login
          </button>
          <div className="links">
            <NavLink to="/signup">Don't have an account? Sign up!</NavLink>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
