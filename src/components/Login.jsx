import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
function Login() {
  const [values,setValues]=useState({
    Email:'',
    Password:''
  })
  const handleChange=(e)=>{
    setValues({ ...values, [e.target.name]: e.target.value })
  }
  const handleSubmit=(e)=>{
    e.preventDefault()
    try {
      const response = axios.post('http://localhost:5000/login', {
        email: values.Email,      // Assuming `email` is the state variable for email
        password: values.Password // Assuming `password` is the state variable for password
      });
  
      console.log(response.data.message); // Expected to be 'Login successful'
    } catch (error) {
      console.error(error); // Logs error details if login fails
      alert(error.response.data.message); // Displays the 'Invalid credentials' message
    }
  }
  return (
    <div id="box1">
      <h2 id="name">ONE7</h2>
      <form onSubmit={handleSubmit} >
        <input className="user" type="text" placeholder='username' required name="Email" onChange={handleChange}/>

        <input className="user" type="password" placeholder='password' required name="Password" onChange={handleChange}/>

        <button className="user" id="btn">login</button>
      </form>

      <p>Don't have account ? <Link to="/signup">Signup</Link></p>

</div>
  )
}

export default Login

