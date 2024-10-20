import React from 'react'
import { Link } from 'react-router-dom';
function Login() {
  return (
    <div id="box1">
      <h2 id="name">ONE7</h2>
      <form action="" >
        <input class="user" type="text" placeholder='username' required/>
      
        <input class="user" type="password" placeholder='password' required/>
        
        <button class="user" id="btn">login</button>
      </form>
      
      <p>Don't have account ? <Link to="/signup">Signup</Link></p>

    </div>
  )
}

export default Login

