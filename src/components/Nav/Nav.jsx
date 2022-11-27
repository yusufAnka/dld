import React from 'react';
import IMG from '../../public/banner2.png';
import IMG2 from '../../public/pdp.png';
import './nav.css'

const Nav = () => {
  return (
    <div className='navbar'>
        <a href="/"><img className='dld4' src={IMG} alt="banner" /></a>
        <img className='pdp4' src={IMG2} alt="banner" />
    </div>
  )
}

export default Nav;