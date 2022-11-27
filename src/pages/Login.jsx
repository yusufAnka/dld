import React from 'react';
import Nav from '../components/Nav/Nav'
import Footer from '../components/Footer/Footer';
import Login from '../components/Login/login';
import './pages.css';

const LoginPage = () => {
  return (
    <div>
        <Nav />
        <div className="log">
          <Login />
        </div>
        
    </div>
  )
}

export default LoginPage;