import Login from './components/Login.jsx';
import Signup from './components/Signup.jsx';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard.jsx';
import Movies from './components/Movies.jsx';


function App() {
  return (
    <div className="App">
      
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/movies" element={<Movies/>}/>

        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
