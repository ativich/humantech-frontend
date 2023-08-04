import { Routes, Route, Link } from 'react-router-dom';
import Login from "./Login";
import Profile from "./Profile";
import Register from './Register';
import MainData from './MainData'
import Homepage from './Homepage';

import Imgemployee from './components/Imgemployee'
import Data from './components/Data';
import Dashboard from './components/Dashboard'
import Assignapprovers from './components/Assignapprovers'
import Receivingchannels from './components/Receivingchannels'
import Setupworkshifts from './components/Setupworkshifts'
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/MainData" element={<MainData />} />
        <Route path="/Homepage" element={<Homepage />} />

        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Imgemployee" element={<Imgemployee />} />
        <Route path="/Data" element={<Data />} />
        <Route path="/Assignapprovers" element={<Assignapprovers />} />
        <Route path="/Receivingchannels" element={<Receivingchannels />} />
        <Route path="/Setupworkshifts" element={<Setupworkshifts />} />
      </Routes>
    </div>
  );
}

export default App;
