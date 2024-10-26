import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';


// CREATE TABLE signup_1 (
//       id INT AUTO_INCREMENT PRIMARY KEY,
//       First_Name VARCHAR(255),
//       Last_Name VARCHAR(255),
//       Mobile_no VARCHAR(255),
//       Email VARCHAR(255),
//       Password VARCHAR(255),
//       Confirm_Password VARCHAR(255)
//   );

const Signup = () => {

  const [values, setValues] = useState({
    First_Name: '',
    Last_Name: '',
    Mobile_no: '',
    Email: '',
    Password: '',
    Confirm_Password: ''
  });

  const [message, setMessage] = useState('');
  const [passwordMismatch, setPasswordMismatch] = useState(false);

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/signup', values)
      .then(res => {
        if (res.data.error) {
          setMessage(res.data.error);
          setPasswordMismatch(true);  // Highlight password fields
          setValues({ ...values, Confirm_Password: '' }); // Clear password fields
        } else {
          console.log("Registered Successfully");
          setMessage(res.data.message);
          setPasswordMismatch(false); // Remove red border if there was a previous mismatch
          setValues({
            First_Name: '',
            Last_Name: '',
            Mobile_no: '',
            Email: '',
            Password: '',
            Confirm_Password: ''
          }); // Clear all fields
        }
      })
      .catch(err => {
        console.error(err);
        setMessage('An error occurred. Please try again.');
      });
  };

  return (
    <div id="box1">
      <h2 id="name">ONE7</h2>
      <form onSubmit={handleSubmit}>

        <input type="text" className="user" placeholder='firstName' name='First_Name' required onChange={handleChange} value={values.First_Name} />
        <input type="text" className="user" placeholder='lastName' name='Last_Name' onChange={handleChange} value={values.Last_Name} />
        <input type="number" className="user" placeholder='Mobile no' name='Mobile_no' required onChange={handleChange} value={values.Mobile_no} />
        <input type="email" className="user" placeholder='Email' name='Email' required onChange={handleChange} value={values.Email} />
        <input type="password" className="user" placeholder='Password' name='Password' required onChange={handleChange} style={{ borderColor: passwordMismatch ? 'red' : '' }} value={values.Password}  />
        <input type="password" className="user" placeholder='Confirm password' name='Confirm_Password' required onChange={handleChange} style={{ borderColor: passwordMismatch ? 'red' : '' }} value={values.Confirm_Password} />
        <button className="user" id="btn">Signup</button>
        <p>Have account ? <Link to="/">Login</Link></p>
        {message && <p>{message}</p>} {/* Display error or success message */}
      </form>
    </div>
  )
}

export default Signup
