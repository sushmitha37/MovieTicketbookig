import Login from './components/Login.jsx'
import Signup from './components/Signup.jsx';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Login/>
      <Router>
        <Routes>
          <Route path="/Signup" component={Signup}/>


          <Route/>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
