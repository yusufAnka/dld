import { Routes, Route } from 'react-router-dom';
import './App.css';
import Dashboard from './pages/Dashboard/Dashboard';
import RegisterPage from './pages/Register';
import LoginPage from './pages/Login';
import Poster from './pages/Poster';
import Portfolio from './components/Portfolio/Portfolio';
import Profile from './components/ProfileImg/Profile';
import Flyer from './pages/Flyer/Flyar';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path='/register' element={<RegisterPage /> } />
        <Route path= '/login' element={<LoginPage /> } />
        <Route path='/manifesto' element={<Portfolio />} />
        <Route path= '/poster' element={<Poster />} />
        <Route path= '/profile' element={<Profile />} />
        <Route path= '/flyer' element={<Flyer />} />
      </Routes>
    </div>
  );
}

export default App;
