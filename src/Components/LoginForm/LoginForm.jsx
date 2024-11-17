import React from 'react'; 
import './LoginForm.css';
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react'; // Add useState import
const LoginForm=()=>{
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent the default form submission behavior

        const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

        // Validate the username (email)
        if (!emailRegex.test(username)) {
            setErrorMessage('Please enter a valid email address ending with @gmail.com.');
            return; // Stop the function if validation fails
        }

        // You can add additional password validation if needed here
        // For now, we assume any non-empty password is valid
        if (password.trim() === '') {
            setErrorMessage('Password cannot be empty.');
            return;
        }

        // If validation passes, clear the error message
        setErrorMessage('');
        navigate('/home');
    };
    return(<div className="home">
        <h1 className="site-heading">IgnitionX</h1>
        <div className="wrapper">
        <form onSubmit={handleSubmit}>
            <h1>Login</h1>
            {errorMessage && <p className="error-message">{errorMessage}</p>} {/* Display error message */}
            <div className="input-box">
                <input 
                    type="text" 
                    placeholder='Username (Email)' 
                    required 
                    value={username}
                    onChange={(e) => setUsername(e.target.value)} // Update username state
                />
                <FaUser className='icon' />
            </div>
            <div className="input-box">
                <input 
                    type="password" 
                    placeholder='Password' 
                    required 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} // Update password state
                />
                <RiLockPasswordFill className='icon' />
            </div>
            <button type="submit">Login</button>
            <div className="register-link">
                <p>Don't have an account?<a href="#"onClick={(e) => {
                                    e.preventDefault();
                                    navigate('/reg'); // Change to your registration route
                                }}>Register</a></p>
            </div>
        </form>
    </div>
    </div>
    )
}

export default LoginForm;