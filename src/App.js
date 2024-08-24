import React, { useState, useEffect } from 'react';
import { Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import LoginSignup from './components/LoginSignup';
import Home from './components/Home';
import CreatePost from './components/CreatePost';
import PostDetail from './components/PostDetail';
import Profile from './components/Profile';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const loggedIn = localStorage.getItem('isAuthenticated') === 'true';
        setIsAuthenticated(loggedIn);
    }, []);

    const handleLogin = () => {
        setIsAuthenticated(true);
        localStorage.setItem('isAuthenticated', 'true');
    };

    const handleLogout = () => {
        setIsAuthenticated(false);
        localStorage.setItem('isAuthenticated', 'false');
        navigate('/login'); // Redirect to the login page after logout
    };

    return (
        <div className="App">
            {isAuthenticated && <Navbar handleLogout={handleLogout} />}
            <Routes>
                <Route path="/" element={isAuthenticated ? <Home /> : <Navigate to="/login" />} />
                <Route path="/create" element={isAuthenticated ? <CreatePost /> : <Navigate to="/login" />} />
                <Route path="/posts/:id" element={isAuthenticated ? <PostDetail /> : <Navigate to="/login" />} />
                <Route path="/profile" element={isAuthenticated ? <Profile /> : <Navigate to="/login" />} />
                <Route path="/about" element={isAuthenticated ? <About /> : <Navigate to="/login" />} />
                <Route path="/contact" element={isAuthenticated ? <Contact /> : <Navigate to="/login" />} />
                <Route path="/login" element={<LoginSignup handleLogin={handleLogin} handleLogout={handleLogout} />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
            {isAuthenticated && <Footer />}
        </div>
    );
}

export default App;
