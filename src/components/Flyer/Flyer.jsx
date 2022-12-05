import React from "react";
import "./flyer.css";
// import IMG from '../../public/banner2.png';
import IMG2 from '../../public/pdp.png';
import dauda from '../../public/d2.jpg';
import Profile  from "../ProfileImg/Profile";

function Flyer(props) {
  return (
      <div className="cardBody">
            <div className='hope'>
                <h2 className="head">FACE OF <br/> HOPE <bold style={{color: 'red'}}>'23</bold></h2>
                <img className='pdp' src={IMG2} alt="banner" />
            </div>
            {/* <div>
              <img className='banner' src={IMG} />
            </div> */}
            <div className="note">
                <i> " BE PART OF THE MOVES  <br />  
                FOR A BETTER ZAMFARA ! "</i>
            </div>
            <div className="profileImage">
              <Profile />
              <div className="myName">
                <h4> MY NAME IS </h4>
                <h2 className="name">{props.name} <br/> And I Will</h2>
                <br/>
                
              </div>
            </div>
            <p className="vote">VOTE</p>
            <div className="imageD">
              <img className='dld2' src={dauda} alt="dauda" />
            </div>
            <div className="governor">
              <p>Dr. DAUDA LAWAL <i>(GAMJIN GUSAU) </i><br />
              <i style={{color:'red'}}>For </i>GOVERNOR <br /> ZAMFARA STATE</p>
            </div>
              
      </div>
  );
}

export default Flyer;

