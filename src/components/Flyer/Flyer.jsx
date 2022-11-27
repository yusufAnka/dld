import React from "react";
import "./flyer.css";
import IMG from '../../public/banner.jpeg';
import IMG2 from '../../public/pdp.png';
import Profile from '../ProfileImg/Profile';

function Flyer() {
  return (
    <>
    <div>
        <div className="cardBody">
          <div className='headers'>
            <img className='dld2' src={IMG} alt="banner" />
            <img className='pdp' src={IMG2} alt="banner" />
          </div>
          <div className="center">
              <h4> MY NAME IS </h4>
          </div>
          <h2 className="name">{}Yusuf Muhammad <br/> And I Will</h2>
          <br/>
          <p className="vote">VOTE</p>
          
          <div className="body">
            <div className="left">
            
              <Profile />
              <i className="better">Dauda For a <br />better Zamfara</i>
            </div>
            <div className="right">
             <p className="dauda">DAUDA LAWAN DARE</p>
             <b>For</b>
             <p className="gov">Governor 2023</p>

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

