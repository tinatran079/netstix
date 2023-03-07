import React, { useState } from "react";
import { useToken } from "./auth";
import "./SignUp.css";
import { NavLink } from "react-router-dom";
import background2 from "./images/background2.png";

function SignUpForm() {
  const [token, login, logout, signup] = useToken();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  async function handleSubmit(e) {
    e.preventDefault();
    signup(username, password, email);
  }

  return (
    <div className="signup" style={{ backgroundImage: `url(${background2})` }}>
      <div className="overlay">
        <form className="form" onSubmit={handleSubmit}>
          <h3>Sign Up</h3>
          <label htmlFor="username">Username</label>
          <input
            type="username"
            id="username"
            placeholder="username"
            value={username}
            onChange={handleUsernameChange}
            required
          />
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
            Sign up
          </button>
          <div className="links">
            <NavLink to="/login">Already have an account? Log in</NavLink>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUpForm;
