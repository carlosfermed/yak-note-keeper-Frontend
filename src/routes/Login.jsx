import axios from 'axios';
import React, { useState } from 'react'


const Login = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:3000/login', {
                username,
                password
            }, {
                withCredentials: true
            });

            if (response.status === 200) {
                console.log(response.data.message);
                onLogin(username);
            } else {
                throw new Error('Login failed');
                // Manejar errores de login aquí
            }
        } catch (error) {
            console.error('Login error:', error.message);
            // Manejar errores de login aquí
        }
    };

    return (
        <div className="userForm">
            <form onSubmit={handleLogin}>
                Username: <input className="customInput" type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                Password: <input className="customInput" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button className="customButton" type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login
