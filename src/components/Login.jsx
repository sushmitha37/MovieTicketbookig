import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Login() {
  const [values, setValues] = useState({
    Email: '',
    Password: ''
  });
  
  const [errorMessage, setErrorMessage] = useState('');


  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form values:", values); // Log form values
    axios.post('http://localhost:5000/login', values)
      .then(res => {
        console.log("Response from server:", res.data); // Log server response
        if (res.data.success) {
          console.log('Login successful');
          // Redirect to the dashboard or other component here
        } else {
          setErrorMessage(res.data.message); // Display error message from backend
        }
      })
      .catch(err => {
        console.error(err);
        setErrorMessage('An error occurred during login');
      });
};


  return (
    <div id="box1">
      <h2 id="name">ONE7</h2>
      <form onSubmit={handleSubmit}>
        <input 
          className="user" 
          type="text" 
          placeholder="Username" 
          required 
          name="Email" 
          onChange={handleChange}
        />
        <input 
          className="user" 
          type="password" 
          placeholder="Password" 
          required 
          name="Password" 
          onChange={handleChange}
        />
        <button className="user" id="btn">Login</button>
      </form>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      <p>Don't have an account? <Link to="/signup">Signup</Link></p>
    </div>
  );
}

export default Login;
