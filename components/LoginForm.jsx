'use client';
import React, { useState } from 'react';
import axios from 'axios';

const LoginForm = () => {
const [userData, setUserData] = useState({ email: "", password: "" });

const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
    }

const loginHandler = async () => {
    try {
        await axios.post("http://localhost:3000/api/login", userData);
    }
    catch(err) {
        console.log(err.message);
    }
}

    return (
        <div>
            <input onChange={(e) => handleChange(e)} placeholder='email' type="email" name="email" />
            <input onChange={(e) => handleChange(e)} placeholder='password' type="text" name="password" />
            <button onClick={loginHandler} >login</button>
        </div>
    );
}

export default LoginForm;
