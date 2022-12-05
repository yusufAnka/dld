import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import './dashboard.css'

const Dashboard = () => {
  return (
    <>
        <div className='home'>
          <Navbar />
            <div className='content1'>
                  <h1>VOTE DAUDA LAWAN DARE<br />FOR GOVERNOR</h1>
                  <p>OUR HOPE FOR A BETTER ZAMFARA</p>
                  <div>
            <a href='/register'><button className='button1' type='button'><span></span>Generate Poster</button></a>
                      <button className='button1' type='button'><span></span>Read Manifesto</button>
                  </div>
              
              </div>
          <Footer />
        </div>
        
    </>
    
  )
}

export default Dashboard;
      