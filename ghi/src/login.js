import React, { useState } from 'react';

    function LoginPage() {
        const [username, setUsername] = useState('')
        const [password, setPassword] = useState('')
        const [error, setError] = useState('')

        const handleSubmit = (event) => {
            event.preventDefault();
            // make a request to your server here to verify the user's credentials

            // if the request is successful, redirect the user to their dashboard

            // if the request is unsuccessful, set the error state
            setError('Invalid username or password. Please try again')
        }
        return (
        <form onSubmit={handleSubmit}>
        <label>
            Username:
            <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            />
        </label>
        <br />
        <label>
            Password:
            <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
        </label>
        <br />
        {error && <p>{error}</p>}
        <button type="submit">Login</button>
        </form>
    );
    }

    export default LoginPage;
