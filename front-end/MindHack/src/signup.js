import React, { useState } from 'react';
import './SignupPage.css';
import {useCookies} from "react-cookie"; // Import the CSS file for styles
import {useNavigate} from "react-router-dom";
import Select from 'react-select'

const SignupPage = () => {

    const [cookies, setCookie, removeCookie] = useCookies(['token']);
    const navigate = useNavigate();
    const options =   [{ value: 'student', label: 'student' },
        { value: 'employer', label: 'employer' }]


    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        type: '',
        lastname:''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleTypeChange = (value) =>{
        formData.type = value.value;
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log('Form data submitted:', formData);
        const request = {
            method: "POST", headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                "email": formData.email,
                "name": formData.name,
                "password": formData.password,
                "type": formData.type,
                "lastname": formData.lastname
            })
        }
        let res = await fetch("http://localhost:5000/authenticate/register", request);
        res = await res.json();
        const token = res.token;
        setCookie('token', token, {path: '/'});
        setCookie("category",formData.type,{path:"/"});
        navigate("/");
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
                    Last Name:
                    <input
                        type="text"
                        name="lastname"
                        value={formData.lastname}
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
                    <Select options={options} onChange = {value => handleTypeChange(value)}   ></Select>
                </label>
                <button type="submit" className="form-button mt-5 pt-5">Sign up</button>
            </form>
        </div>
    );
};

export default SignupPage;
