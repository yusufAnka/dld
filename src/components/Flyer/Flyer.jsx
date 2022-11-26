import React from "react";
import "./flyer.css";
import IMG from '../../public/banner2.png';
import IMG2 from '../../public/pdp.png';
import Profile from '../ProfileImg/Profile';

function Flyer({ closeModal }) {
  return (
    <>
    <div>
        
        <div className="title">
          <h1>You can Print your Card</h1>
        </div>
        <div className="cardBody">
          <div className='headers'>
            <img className='dld2' src={IMG} alt="banner" />
            <img className='pdp' src={IMG2} alt="banner" />
          </div>
          <div className="center">
              <p> MY NAME IS </p>
          </div>
          <div className="body">
            <div className="left">
              <Profile />
              <i>Dauda For a better Zamfara</i>
            </div>
            <div className="right">
             <p>{}Yusuf Muhammad</p>
             <p>AND I WILL VOTE</p>
             <p>DAUDA LAWAN DARE</p>
             <b>For</b>
             <p>Governor 2023</p>

            </div>
            
          </div>
        </div>
        {/* <div className="footer">
          <button
            onClick={() => {
              closeModal(false);
            }}
            id="cancelBtn"
          >
            Cancel
          </button>
          <button>Print</button>
        </div> */}
      </div>

    </>
  );
}

export default Flyer;

