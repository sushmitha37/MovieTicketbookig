import React from 'react'
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
          <li id='ul-li'><Link style={{color:'black',fontSize:"0.9rem"}} to='/movies'>Movies</Link></li>
          <li id='ul-li'><Link style={{color:'black',fontSize:"0.9rem"}} to='/sports'>Sports</Link></li>
          <li id='ul-li'><Link style={{color:'black',fontSize:"0.9rem"}} to='/events'>Events</Link></li>
          <li id='ul-li'><Link style={{color:'black',fontSize:"0.9rem"}} to='/stream'>Stream</Link></li>
          <li id='ul-li'><Link style={{color:'black',fontSize:"0.9rem"}} to='/activities'>Activities</Link></li>
        </ul>
        <ul id="ul-items">
          <li id='ul-li'><Link style={{color:'black',fontSize:"0.9rem"}} to='yourbookings'>YourBookings</Link></li>
          <li id='ul-li'><Link style={{color:'black',fontSize:"0.9rem"}} to='/offers'>Offers</Link></li>
          <li id='ul-li'><Link style={{color:'black',fontSize:"0.9rem"}} to='/giftcards'>GiftCards</Link></li>
          <li id='ul-li'><Link style={{color:'black',fontSize:"0.9rem"}} to='/funZone'>FunZone</Link></li>
          {/* <li id='ul-li'><Link style={{color:'black',fontSize:"0.9rem"}}>Activities</Link></li> */}
        </ul>
        
      </div>
    
      
    </header>
    
      
    </>
  )
}

export default Dashboard
