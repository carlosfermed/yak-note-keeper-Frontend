import axios from 'axios';
import React, { useState } from 'react'


const Login = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("http://localhost:3000/login", {
                username,
                password
            }, {
                withCredentials: true
            });

            if (response.status === 200) {
                console.log(response.data.message);
                onLogin(username);
            } else {
                throw new Error('El proceso de login ha fallado.');
            }
        } catch (error) {
            console.error('Login error:', error.response.data);
        }
    };

    const handleRegister = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("http://localhost:3000/register", {
                username,
                password
            });

            if (response.status === 201) {
                console.log(response.data.message); // Mensaje de éxito en el registro mostrado en consola.
                alert(response.data.message);       // Mensaje de éxito en el registro mostrado al usuario.
                setUsername("");
                setPassword("");
            } else {
                throw new Error('Se ha producido un error al intentar crear el usuario.');
            }
        } catch (error) {
            console.error('Error en registro:', error.response.data.message);
        }
    };

    return (
        <div className="userForm">
            <fieldset>
            <legend>Gestión de usuarios</legend>
            <form onSubmit={handleLogin}>
                Username: <input className="customInput" type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                Password: <input className="customInput" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button className="customButton" type="submit">Login</button>
                <button className="customButton" onClick={handleRegister} type="submit">Registrar</button>
            </form>
            </fieldset>
        </div>
    );
};

export default Login
