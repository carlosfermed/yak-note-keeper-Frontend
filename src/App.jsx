import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import Login from './routes/Login'
import Notes from './routes/Notes'
import { useState } from 'react'
import './App.css'

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [userName, setUserName] = useState("");


    const handleLogin = (username) => {
        setUserName(username);
        setIsAuthenticated(true);
    };

    const handleLogout = () => {
        setIsAuthenticated(false);
    };

    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route
                        path="/"
                        element={
                            isAuthenticated ? (
                                <Navigate to="/notes" />
                            ) : (
                                <Login onLogin={handleLogin} />
                            )
                        }
                    />
                    <Route
                        path="/notes"
                        element={
                            isAuthenticated ? (
                                <Notes onLogout={handleLogout} userName={userName} />
                            ) : (
                                <Navigate to="/" />
                            )
                        }
                    />
                </Routes>
            </div>
        </Router>
    );
}

export default App
