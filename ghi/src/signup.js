import React, { useState } from 'react'

function SignupPage(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState(null);

    function handleSubmit(e) {
        e.preventDefault();
        setError(null);

        fetch('api/accounts', {
          method: 'POST',
          body: JSON.stringify({username, password, email}),
          headers: { 'Content-Type': 'application/json'},
        })
        .then(async res => {
          if (!res.ok){
            return res.json().then(error => {
              console.log(res.json)
              setError(error.detail);
              throw new Error(error.detail);
            })
          }
          return res.json

        })
        .then(data => {
          console.log(data);
        })
        .catch(error => {
            console.log(error)
        })

    }

    return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input
          type="text"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </label>
      <br />
      <button type="submit">Signup</button>
    </form>
  );
}

export default SignupPage;
