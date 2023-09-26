import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'

import './style.css'



const Register = () => {
  const navigate = useNavigate()
  const [username, setUsername] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:3001/register', {
      username, email, password
    }).then(res => navigate('/login')).catch(err => console.log(err))
  }
  return (
    <div className="signup-container ">
      <div className="signup_form">
        <h2 >Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" >
              Username:
            </label>
            <input
              type="text"
              
              placeholder="Enter username"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="email" >
              Email:
            </label>
            <input
              type="text"
              
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password" >
              Password:
            </label>
            <input
              type="password"
              
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="signup_btn button">
            Sign Up
          </button>
        </form>
        <br />
        <p>Already have account?</p>
        <Link to="/login">
          <button className="signup_btn">
            Login
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Register
