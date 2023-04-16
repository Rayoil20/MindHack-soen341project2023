import React, { useState } from 'react';
import './SignupPage.css'; // Import the CSS file for styles

const SignupPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        role: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Form data submitted:', formData);
        setFormData({
            name: '',
            email: '',
            password: '',
            role: ''
        });
    };

    return (
        <div className="signup-page">
            <h1>Sign up</h1>
            <form onSubmit={handleSubmit} className="signup-form">
                <label>
                    Name:
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="form-input"
                    />
                </label>
                <label>
                    Email:
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="form-input"
                    />
                </label>
                <label>
                    Password:
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        className="form-input"
                    />
                </label>
                <label>
                    Role:
                    <select
                        name="role"
                        value={formData.role}
                        onChange={handleChange}
                        className="form-input"
                    >
                        <option value="">--Select Role--</option>
                        <option value="student">Student</option>
                        <option value="employer">Employer</option>
                    </select>
                </label>
                <button type="submit" className="form-button">Sign up</button>
            </form>
        </div>
    );
};

export default SignupPage;
