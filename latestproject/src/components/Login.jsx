import React, { useState } from "react";
import './Login.css';

const Login = () => {
  //using one usetstae to manage all form field
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  //destructuring form data for easy access
  const { email, password } = formData;
  const handleChange = (e) =>{
    setFormData({
      //spread operator to keep existing state
      ...formData,
      [e.target.name]: e.target.value  //it update the specific field
    });
    console.log(formData);

  };


  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log("Login details here", formData);

  }



  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleChange}
            required
          />

        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input 
          type="password"
          id = "password"
          name="password"
          value={password}
          onChange={handleChange}
          required
          />
          <button type="submit" className="login-button">
            Login
          </button>


        </div>
      </form>
    </div>
  );
};

export default Login;
