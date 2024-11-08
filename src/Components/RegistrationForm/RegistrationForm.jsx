import React from 'react'; 
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
// import './RegistrationForm.css'

export default function RegForm() {
    const navigate = useNavigate();
    // States for registration
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState(""); // New phone number state
    const [profilePic, setProfilePic] = useState(null); // New profile picture state

    // States for checking the errors
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);

    // Handling the name change
    const handleName = (e) => {
        setName(e.target.value);
        setSubmitted(false);
    };

    // Handling the email change
    const handleEmail = (e) => {
        setEmail(e.target.value);
        setSubmitted(false);
    };

    // Handling the password change
    const handlePassword = (e) => {
        setPassword(e.target.value);
        setSubmitted(false);
    };

    const handlePhone = (e) => {
        setPhone(e.target.value);
        setSubmitted(false);
    };

    const handleProfilePic = (e) => {
        setProfilePic(e.target.files[0]);
        setSubmitted(false);
    };

    // Handling the form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        if (name === "" || email === "" || password === "") {
            setError(true);
        } else {
            setSubmitted(true);
            setError(false);
            navigate('/home');
        }
    };

    // Showing success message
    const successMessage = () => {
        return (
            <div
                className="success"
                style={{
                    display: submitted ? "" : "none",
                }}
            >
                <h1>User {name} successfully registered!!</h1>
            </div>
        );
    };

    // Showing error message if error is true
    const errorMessage = () => {
        return (
            <div
                className="error"
                style={{
                    display: error ? "" : "none",
                }}
            >
                <h1>Please enter all the fields</h1>
            </div>
        );
    };



    return (
        <div className="home">
        <div className="form">
            <div>
                <h1>User Registration</h1>
            </div>

            {/* Calling to the methods */}
            <div className="messages">
                {errorMessage()}
                {successMessage()}
            </div>

            <form>
                {/* Labels and inputs for form data */}
                <label className="label">Name</label>
                <input
                    onChange={handleName}
                    className="input"
                    value={name}
                    type="text"
                />

                <label className="label">Phone Number</label>
                <input
                    onChange={handlePhone}
                    className="input"
                    value={phone}
                    type="tel"
                    pattern="[0-9]{10}" // Example pattern for a 10-digit phone number
                />

                <label className="label">Email</label>
                <input
                    onChange={handleEmail}
                    className="input"
                    value={email}
                    type="email"
                />

                <label className="label">Password</label>
                <input
                    onChange={handlePassword}
                    className="input"
                    value={password}
                    type="password"
                />

                <label className="label">Profile Picture</label>
                <input
                    onChange={handleProfilePic}
                    className="input"
                    type="file"
                    accept="image/*" // Accept only image files
                />

                {/* Image Preview */}
                {profilePic && (
                    <div className="image-preview">
                        <img 
                            src={URL.createObjectURL(profilePic)} 
                            alt="Profile Preview" 
                            width="100" 
                            height="100" 
                        />
                    </div>
                )}


                <button onClick={handleSubmit} className="btn" type="submit">
                    Submit
                </button>
            </form>
        </div>
        </div>
    );
}

