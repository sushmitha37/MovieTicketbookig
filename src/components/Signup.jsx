import React from 'react'
import {Link} from 'react-router-dom';
function Signup() {
  return (
    <div id="box1">
        <h2 id="name">ONE7</h2>
     <form action="">
        
        <input type="text" className="user" placeholder='firstName' required/>
        <input type="text" className="user" placeholder='lastName'  />
        <input type="number" className="user" placeholder='Mobile no'required/>
        <input type="email" className="user" placeholder='Email'required/>       
        <input type="password" className="user" placeholder='Password' required/>
        <input type="password" className="user" placeholder='Confirm password' required/>
        <button className="user" id="btn">Signup</button>
        <p>Have account ? <Link to="/">Login</Link></p>

        
        
        
     </form>
    </div>
  )
}

export default Signup
