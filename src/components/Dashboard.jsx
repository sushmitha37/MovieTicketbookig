import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Link, useNavigate } from 'react-router-dom';


const Dashboard = () => {
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate('/login');
  };
  return (
    <>
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
        <button onClick={goToLogin}>Sign in</button>  
      </div>
      <div id="li-items">
        <ul id="ul-items">
          <li id='ul-li'><Link style={{color:'black',fontSize:"small"}} to='/movies'>Movies</Link></li>
          <li id='ul-li'><Link style={{color:'black',fontSize:"small"}}>Sports</Link></li>
          <li id='ul-li'><Link style={{color:'black',fontSize:"small"}}>Events</Link></li>
          <li id='ul-li'><Link style={{color:'black',fontSize:"small"}}>Stream</Link></li>
          <li id='ul-li'><Link style={{color:'black',fontSize:"small"}}>Activities</Link></li>
        </ul>
        <ul id="ul-items">
          <li id='ul-li'><Link style={{color:'black',fontSize:"small"}}>YourBookings</Link></li>
          <li id='ul-li'><Link style={{color:'black',fontSize:"small"}}>Offers</Link></li>
          <li id='ul-li'><Link style={{color:'black',fontSize:"small"}}>GiftCards</Link></li>
          <li id='ul-li'><Link style={{color:'black',fontSize:"small"}}>FunZone</Link></li>
          <li id='ul-li'><Link style={{color:'black',fontSize:"small"}}>Activities</Link></li>
        </ul>
        
      </div>
    
      
    </header>
    
      
    </>
  )
}

export default Dashboard
