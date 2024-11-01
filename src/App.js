import Login from './components/Login.jsx';
import Signup from './components/Signup.jsx';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard.jsx';
import Movies from './components/Movies.jsx';
import Sports from './components/Sports.jsx';
import Events from './components/Events.jsx';
import Stream from './components/Stream.jsx';
import Activities from './components/Activities.jsx';
function App() {
  return (
    <div className="App">

      <Router>
          <Dashboard />
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/sports" element={<Sports />} />
          <Route path="/events" element={<Events />} />
          <Route path="/stream" element={<Stream />} />
          <Route path="/activities" element={<Activities />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
