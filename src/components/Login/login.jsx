import React, {useState} from "react";
import loginImg from "../../public/d3.jpg";
import Validator from "validator"; 
import './style.scss'

const Login = () =>  {

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

    return (
      <div className="base-container">
        <div className="header">Login</div>
        <div className="contents">
          <div className="image">
            <img src={loginImg} />
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" name="username" placeholder="username" className="input" />
              {formData.email.length === 0 ? (
                <span style={{ color: "red" }}></span>
            ) :
              formData.email.length > 0 &&
                Validator.isEmail(formData.email) ? (
                <></>
              ) :
                (
                <span style={{ color: "red" }}>Please enter a valid email</span>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" placeholder="password" />
              {formData.password.length > 7 ? (
                <span style={{ color: "green" }}></span>
              ) : formData.password.length === 0 ? (
                <span style={{ color: "red" }}></span>
              ) : (
                <span style={{ color: "red" }}>
                  Must be at least 8 characters
                </span>
              )}
            </div>
          </div>
        </div>
        <div className="footer">
          <a href="/register"><button type="button" className="btnlogin"><span></span>
            Login
          </button>
          </a>
        </div>
      </div>
    );
}
export default Login;