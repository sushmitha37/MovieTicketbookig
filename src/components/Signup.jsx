import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
function Signup() {
  const [values, setValues] = useState(
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
    setValues({ ...values, [e.target.name]: [e.target.value] })
  }
 const handleSubmit=(e)=>{
  e.preventDefault();
  axios.post('http://localhost:5000/signup',values)
  .then(res=>console.log('Registered sucessfully'))
  .catch(err=>console.log(err));
 }
  return (
    <div id="box1">
      <h2 id="name">ONE7</h2>
      <form onSubmit={handleSubmit}>

        <input type="text" className="user" placeholder='firstName' name='Fname' required onChange={handleChange} />
        <input type="text" className="user" placeholder='lastName' name='Lname' onChange={handleChange} />
        <input type="number" className="user" placeholder='Mobile no' name='mobileno' required onChange={handleChange} />
        <input type="email" className="user" placeholder='Email' name='email' required onChange={handleChange} />
        <input type="password" className="user" placeholder='Password' name='password' required onChange={handleChange} />
        <input type="password" className="user" placeholder='Confirm password' name='cpassword' required onChange={handleChange} />
        <button className="user" id="btn">Signup</button>
        <p>Have account ? <Link to="/">Login</Link></p>




      </form>
    </div>
  )
}

export default Signup
