import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../Pages/Signup.css';

const Login = () => {

  const [ credentials, setcredentials ] = useState({ password: "", email: "" })
  let navigate = useNavigate();

  const handleSubmit = async(e) => {
    e.preventDefault();

    // console.log(JSON.stringify({ password: credentials.password, email: credentials.email }));
    // Object = JSON.parse(JSON.stringify({name: credentials.name, password: credentials.password, email: credentials.email, location: credentials.geolocation}))

    const response = await fetch("http://localhost:5000/api/loginuser", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ password: credentials.password, email: credentials.email }),
      });

      
      const json = await response.json()
      console.log(json);

      if(!json.success) {
        alert("Enter valid credentials");
      }

      if(json.success) {
        localStorage.setItem("userEmail", credentials.email);
        localStorage.setItem("authToken", json.authToken);
        console.log(localStorage.getItem("authToken"));
        navigate("/");
      }

  }

  const onChange = (e) => {
    setcredentials({ ...credentials, [e.target.name]: e.target.value })
  }

  return (
    <>

    <div className="LoginPageContainer">

      <div className="LoginPageInnerContainer">

        <div className="ImageContianer">
          <img src="https://i.imgur.com/MYZd7of.png" className="GroupImage" />
        </div>

        <div className="LoginFormContainer">

          <div className="LoginFormInnerContainer">

            <header className="header">Log in</header>
            <header className="subHeader">Welcome to <b>GoFood!</b> Please Enter your Details</header>

            <form onSubmit={handleSubmit}>
              <div className="inputContainer">
                <label className="label" htmlFor="emailAddress">
                  <img src="https://i.imgur.com/Hn13wvm.png" className="labelIcon" />
                  <span>Email Address*</span>
                </label>
                <input type="email" className="input" id="emailAddress" name='email' value={credentials.email} placeholder="Enter your Email Address" onChange={onChange} />
              </div>
              <div className="inputContainer">
                <label className="label" htmlFor="emailAddress">
                  <img src="https://i.imgur.com/g5SvdfG.png" className="labelIcon" />
                  <span>Password*</span>
                </label>
                <input type="password" className="input" id="emailAddress" name='password' value={credentials.password} placeholder="Enter your Password" onChange={onChange} />
              </div>
              <div className="OptionsContainer">
                <div className="checkboxContainer">
                  <span> Don't have an account? <Link to="/createuser">Sign Up</Link> </span>
                </div>
                {/* <a href="#" className="ForgotPasswordLink">Forgot Password?</a> */}
              </div>
              <button className="LoginButton">Login</button>
            </form>

          </div>
          
        </div>
      </div>
    </div>


    </>
  )
}

export default Login