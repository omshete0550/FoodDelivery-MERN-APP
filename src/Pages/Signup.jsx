import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Pages/Signup.css';

const Signup = () => {

  const [ credentials, setcredentials ] = useState({ name: "", password: "", email: "", geolocation: "" })


  const handleSubmit = async(e) => {
    e.preventDefault();

    console.log(JSON.stringify({name: credentials.name, password: credentials.password, email: credentials.email, location: credentials.geolocation}));
    // Object = JSON.parse(JSON.stringify({name: credentials.name, password: credentials.password, email: credentials.email, location: credentials.geolocation}))

    const response = await fetch("http://localhost:5000/api/createuser", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name: credentials.name, password: credentials.password, email: credentials.email, location: credentials.geolocation }),
      });

      
      const json = await response.json()
      console.log(json);

      if(!json.success) {
        alert("Enter valid credentials");
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

            <header className="header">Sign Up</header>
            <header className="subHeader">Welcome to <b>GoFood!</b> Please Enter your Details</header>

            <form onSubmit={handleSubmit}>
              <div className="inputContainer">
                <label className="label" htmlFor="Name">
                  <img src="https://i.imgur.com/Hn13wvm.png" className="labelIcon" />
                  <span>Name*</span>
                </label>
                <input type="text" className="input" id="emailAddress" placeholder="Enter your name" name='name' value={credentials.name} onChange={onChange} />
              </div>
              <div className="inputContainer">
                <label className="label" htmlFor="emailAddress">
                  <img src="https://i.imgur.com/Hn13wvm.png" className="labelIcon" />
                  <span>Email Address*</span>
                </label>
                <input type="email" className="input" id="emailAddress" placeholder="Enter your Email Address" name='email' value={credentials.email} onChange={onChange} />
              </div>
              <div className="inputContainer">
                <label className="label" htmlFor="emailAddress">
                  <img src="https://i.imgur.com/g5SvdfG.png" className="labelIcon" />
                  <span>Password*</span>
                </label>
                <input type="password" className="input" id="emailAddress" placeholder="Enter your Password" name='password' value={credentials.password} onChange={onChange} />
              </div>   
              <div className="inputContainer">
                <label className="label" htmlFor="emailAddress">
                  <img src="https://i.imgur.com/g5SvdfG.png" className="labelIcon" />
                  <span>Address*</span>
                </label>
                <input type="text" className="input" id="emailAddress" placeholder="Enter your address" name='geolocation' value={credentials.geolocation} onChange={onChange} />
              </div>              
              <div className="OptionsContainer">
                <div className="checkboxContainer">
                  <span> Have an account? <Link to="/login">Sign In</Link> </span>
                </div>
                {/* <a href="#" className="ForgotPasswordLink">Forgot Password?</a> */}
              </div>
              <button className="LoginButton">Sign Up</button>
            </form>

          </div>
          
        </div>
      </div>
    </div>


    </>
  )
}

export default Signup