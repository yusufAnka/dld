import React from 'react';
import Nav from '../components/Nav/Nav';
import Footer from '../components/Footer/Footer';
import Register  from '../components/Login/register';

const RegisterPage = ({ setOpenModal }) => {
  return (
    <div>
        <Nav />
        <Register />
    </div>
  )
}

export default RegisterPage