import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
function Signup() {
  // const [successMessage, setSuccessMessage] = useState('');
  const [values, setValues] = useState(
  //   CREATE TABLE signup_1 (
  //     id INT AUTO_INCREMENT PRIMARY KEY,
  //     First_Name VARCHAR(255),
  //     Last_Name VARCHAR(255),
  //     Mobile_no VARCHAR(255),
  //     Email VARCHAR(255),
  //     Password VARCHAR(255),
  //     Confirm_Password VARCHAR(255)
  // );
    {
      First_Name: '',
      Last_Name: '',
      Mobile_no: '',
      Email: '',
      Password: '',
      Confirm_Password: ''
    }
  )
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    // try {
    //   const response = fetch('http://localhost:5000/signup', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(values),
    //   });
  
    //   console.log(response); // Check if the response is as expected
  
    //   if (response.ok) {
    //     const result = response.json();
    //     setSuccessMessage(result.message);
    //   } else {
    //     setSuccessMessage('Registration failed. Please try again.');
    //   }
    // } catch (error) {
    //   console.error('Error during signup:', error);
    //   setSuccessMessage('An error occurred. Please try again.');
    // }
  
    console.log(values);
    axios.post('http://localhost:5000/signup', values)
      .then(res => console.log('Registered sucessfully'))
      .catch(err => console.log(err));
  }
  return (
    <div id="box1">
      <h2 id="name">ONE7</h2>
      <form onSubmit={handleSubmit}>

        <input type="text" className="user" placeholder='firstName' name='First_Name' required onChange={handleChange} />
        <input type="text" className="user" placeholder='lastName' name='Last_Name' onChange={handleChange} />
        <input type="number" className="user" placeholder='Mobile no' name='Mobile_no' required onChange={handleChange} />
        <input type="email" className="user" placeholder='Email' name='Email' required onChange={handleChange} />
        <input type="password" className="user" placeholder='Password' name='Password' required onChange={handleChange} />
        <input type="password" className="user" placeholder='Confirm password' name='Confirm_Password' required onChange={handleChange} />
        <button className="user" id="btn">Signup</button>
        <p>Have account ? <Link to="/">Login</Link></p>
      </form>
    </div>
  )
}

export default Signup
