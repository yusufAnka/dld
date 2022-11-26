import React from 'react';
import IMG from '../../public/banner.jpeg';
import './navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
     
            <h4 className='navLogo'>GAMJIN KOWA MEDIA</h4>
            <ul>
                <li><a href='/'>Dashboard</a></li>
                <li><a href='/login'>Login</a></li>
            </ul>

    </div>
  )
}

export default Navbar