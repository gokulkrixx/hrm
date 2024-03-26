import React, { useState } from "react";
import axios from "axios";
import './adminlogin.css'
import { useNavigate } from "react-router-dom";




function Adminloginpage() {
 
  const Navigate= useNavigate();
  const [email, setEmail] = useState('');
  const [password, setpassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setpassword(e.target.value);
  };

  const handlelogin = async (e) => {
    e.preventDefault(); 
   console.log("buttonclicked");
    const HOSTED_SERVER_URL = 'http://localhost:2005';

    try {
      const response = await axios.post(`${HOSTED_SERVER_URL}/login`, {
        email,
        password,
      });

      if (response.data.statusCode === 200) {

        console.log('Login successful');
        alert('Login Successful');
        localStorage.setItem('accessTocken', response.data.data);
        Navigate("/Admin");

      } else {

        console.log('Login Failed');
        alert('Login Failed');
        console.error('Login failed:', response.data.message);
      }

    } catch (error) {
      console.error('Error during login:', error);
    }

  };

  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
      <link rel="stylesheet" href="style.css" />
      <form >
        <h2 className="heading">Login</h2>
        <label htmlFor="email">Email:</label>
        <input type="text" value={email} onChange={handleEmailChange} required="" />
        <label htmlFor="password">Password:</label>
        <input  type="password"  value={password} onChange={handlePasswordChange} required=""/>
        <div>
        <button className="but_admin" onClick={handlelogin} type="button"> Login </button>
        
        </div>
      </form>
    </>
  )

}
export default Adminloginpage;