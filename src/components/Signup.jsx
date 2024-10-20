import React from 'react'

function Signup() {
  return (
    <div>
     <form action="">
        <input type="text" className="user" placeholder='firstName' required/>
        <input type="text" className="user" placeholder='lastName'  />
        <input type="number" className="user" placeholder='Mobile no'required/>
        <input type="email" className="user" placeholder='Email'required/>       
        <input type="password" className="user" placeholder='password' required/>
        <input type="password" className="user" placeholder='confirm password' required/>
        <button className="user" id="signup">Signup</button>

        
        
        
     </form>
    </div>
  )
}

export default Signup
