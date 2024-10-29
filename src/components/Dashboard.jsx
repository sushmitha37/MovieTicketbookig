import React from 'react'

const Dashboard = () => {
  return (
    <header id="navbar">
      <div id="items">
        <h1 >ONE7</h1>
        <input type="text" placeholder='Search for Movies, Events, Sports and Entertainment'/>
        <select name="location" id="dropdown">
          <option value="Hyderabad">Hyderabad</option>
          <option value="Chennai">Chennai</option>
          <option value="Bangalore">Bangalore</option>
          <option value="Kochi">Kochi</option>
          <option value="Mumbai">Mumbai</option>
          <option value="Kolkata">Kolkata</option>
          <option value="Delhi">Delhi</option>
          <option value="Pune">Pune</option>
        </select>
        <button>Sign in</button>
      </div>
    </header>
  )
}

export default Dashboard
