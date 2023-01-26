import React, { useState, useEffect  } from "react";
import { useNavigate } from "react-router-dom";
import { useToken, getUser } from "./auth";
import "./login.css"

function LoginForm() {
  const [token, login] = useToken();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  async function HandleSubmit(e)  {
    e.preventDefault();
    login(email, password);
  }
  return (
    <div className="center">
      <div className="">
        <div className="shadow p-4 mt-4">
          <h1>Login</h1>
          <form onSubmit={HandleSubmit} id="login-form">
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
              <label htmlFor="Email">Email</label>
            </div>
            <div className="txt_field">
              <input
                onChange={handlePasswordChange}
                value={password}
                type="password" required
                name="password"
                id="password"
                className="form-control"
              />
              <label>Password</label>
            </div>
            <input type="submit" value="Login"/>
          </form>
        </div>
      </div>
    </div>
  );
}


export default LoginForm;
