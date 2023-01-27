import React, { useState } from "react";
import { useToken } from "./auth";
import "./SignUp.css";
import { NavLink } from "react-router-dom";

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
    <div className="center">
      <div className="">
        <div className="shadow p-4 mt-4">
          <h1>Sign Up</h1>
          <form onSubmit={handleSubmit} id="login-form">
            <div className="txt_field">
              <input
                onChange={handleUsernameChange}
                value={username}
                required
                type="username"
                name="username"
                id="username"
                className="form-control"
              />
              <label htmlFor="username">Username</label>
            </div>
            <div className="txt_field">
              <input
                onChange={handlePasswordChange}
                value={password}
                required
                type="password"
                name="password"
                id="password"
                className="form-control"
              />
              <label htmlFor="username">Password</label>
            </div>
            <div className="txt_field">
              <input
                onChange={handleEmailChange}
                value={email}
                required
                type="email"
                name="email"
                id="email"
                className="form-control"
              />
              <label htmlFor="email">Email</label>
            </div>
            <input type="submit" value="Signup" />
            <h4>
              <NavLink className="nav-link" to="/login">
                {" "}
                Already have an account? Log in!{" "}
              </NavLink>
            </h4>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUpForm;
