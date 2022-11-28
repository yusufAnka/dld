import React, {useState} from "react";
import loginImg from "../../public/d1.jpg";
import './style.scss';
import Card from '../Card/Card';
import Flyer from "../Flyer/Flyer";

const Register = () => {
  const [modal, setModal] = useState(false);
    const [name, setName] = useState("");
  function handleChange(e){
    e.preventDefault()

    setName(e.target.value)
  }
  
  
    return (
      <div className="base-container">
        <div className="header">Register</div>
        <div className="contents">
          <div className="image">
            <img src={loginImg} />
          </div>
          <div className="form">
            <div className="form-group">
              <input type="text" name="name" value={name} onChange={(e) => handleChange(e)} placeholder="Full Name" />
            </div>
            <div className="form-group">
              <input type="text" name="ward" placeholder="Ward" />
            </div>
            <div className="form-group">
              <input type="text" name="pvcnumber" placeholder="PVC Number" />
            </div>
            <div className="form-group">
              <input type="text" name="phonenumber" placeholder="Phone Number" />
            </div>
            <div className="form-group">
              <input type="text" name="pollingunit" placeholder="Polling Unit" />
            </div>
            <div className="form-group">
              <input type="text" name="address" placeholder="Residential Address" />
            </div>
          </div>
        </div>
        <div className="footer1">
          <button type="button" className="btnlogin" onClick= {() => setModal(true)}>
            Submit
          </button>
          {modal && <Card name={name} closeModal={setModal}/>}
        </div>
      </div>
    );
}

export default Register;