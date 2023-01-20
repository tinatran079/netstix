import React, { useState } from "react";
import { useToken } from "./auth";

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

  async function handleSubmit(e)  {
    e.preventDefault();
    login(email, password);



  }
  return (
    <div className="row">
      <div className="offset-3 col-6">
        <div className="shadow p-4 mt-4">
          <h1>Login</h1>
          <form onSubmit={handleSubmit} id="login-form">
            <div className="form-floating mb-3">
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
            <div className="form-floating mb-3">
              <input
                onChange={handlePasswordChange}
                value={password}
                type="password"
                name="password"
                id="password"
                className="form-control"
              />
              <label htmlFor="password">Password</label>
            </div>
            <button className="btn btn-primary">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}


export default LoginForm;
