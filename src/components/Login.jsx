import React from 'react'

function Login() {
  return (
    <div id="box1">
      <h2 id="name">ONE7</h2>
      <form action="" >
        <input class="user" type="text" placeholder='username' required/>
      
        <input class="user" type="password" placeholder='password' required/>
        
        <button class="user" id="login">login</button>
      </form>
      <p>Don't have account <a href="www.google.com">signup</a></p>

    </div>
  )
}

export default Login

