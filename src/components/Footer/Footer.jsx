import React from 'react'
import './footer.css';
import {FaTwitter} from "react-icons/fa";
import {BsTwitter} from "react-icons/bs";
import img4  from "../../public/banner2.png";

const Footer = () => {
  return (
    <footer>
        <a href="https://twitter.com/Youth4Dauda"><img className='footer_banner' src={img4} /></a>
        <a href="https://twitter.com/Youth4Dauda"><BsTwitter className="twitter"/></a>
        {/* <div className='footer__socials'> */}
          <a href="https://yumtech.vercel.app/" target="_blank">&copy; Yumtech </a>
        {/* </div> */}

    </footer>
  )
}

export default Footer