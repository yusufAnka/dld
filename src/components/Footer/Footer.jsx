import React from 'react'
import './footer.css';
import {FaTwitter} from "react-icons/fa";
import {MdEmail} from "react-icons/md";
import img4  from "../../public/banner2.png";

const Footer = () => {
  return (
    <footer>
        <img className='footer_banner' src={img4} />
        <div className='footer__socials'>
          <a href="https://yumtech.vercel.app/" target="_blank">&copy; Yumtech </a>
          <a href='mailto:yusufanka54@gmail.com' target="_blank"><MdEmail /></a>  
        </div>
        <img className='footer_banner' src={img4} />

    </footer>
  )
}

export default Footer