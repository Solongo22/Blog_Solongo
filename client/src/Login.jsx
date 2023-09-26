import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/login", {
        email,
        password,
      })
      .then((result) => {
        if (result.data === "Success") {
          location.href = '/'
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className=" login-container">
      <div className="login-form">
        <h2 >Login</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" >
              Email:
            </label>
            <input
              type="text"
              
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password" >
              Password:
            </label>
            <input
              type="password"
              
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="login_btn" >
            Login
          </button>
        </form>
        <br />
        <p>Not Registered</p>
        <Link to="/register">
          <button className="login_btn btn" >
            Register
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Login;
