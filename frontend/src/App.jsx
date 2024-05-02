import React from 'react';
import './App.css';
import {BrowserRouter, Link, Routes, Route} from 'react-router-dom';

import Home from './pages/Home.jsx';
import Badges from './pages/Badges.jsx';
import Timer from './pages/Timer.jsx';
import Calendar from './pages/Calendar.jsx';
import Tasks from './pages/Tasks.jsx';




// import BadgeCollection from './components/BadgeCollection.jsx';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Link to="/home">Home</Link> <br/>
        <Link to="/badges">Badges</Link> <br/>
        <Link to="/timer">Timer</Link> <br/>
        <Link to="/calendar">Calendar</Link> <br/>
        <Link to="/tasks">Tasks</Link> <br/>
      

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/badges" element={<Badges />} />
        <Route path="/timer" element={<Timer />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/tasks" element={<Tasks />} />
      </Routes>
      </BrowserRouter>

      {/* <header className="App-header">
        <h1>Achievement Notifications Demo</h1>
        <BadgeCollection />
      </header> */}
    
      
    </div>
  );
}

export default App;




