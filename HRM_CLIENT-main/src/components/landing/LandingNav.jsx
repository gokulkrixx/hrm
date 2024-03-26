import React from "react";
import './landing.css';
import {Link} from "react-router-dom";
import Adminlogin from "../adminlogin/Adminlogin";

function LandingNav({displayData}) {
    return (
        <>
        <meta charSet="UTF-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>ORIGINAL</title>
  <nav className="navbar">
    <div className="navbar-container container">
      <input type="checkbox" name="" id="" />
      <div className="hamburger-lines">
        <span className="line line1" />
        <span className="line line2" />
        <span className="line line3" />
      </div>
      <ul className="menu-items">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Category</a>
        </li>
        <li>
          <a href="#">Menu</a>
        </li>
        <li>
          <a href="#">Testimonial</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
        <li>
         <Link to={'/adminlogin'}> <button >LOGIN</button></Link>
        </li>
       
      </ul>
      <h1 className="logo">APPLICATION</h1>
    </div>
  </nav>


   <div className="bg">

    <h1 className="head" >Mobile App Development</h1>
    <h2 className="head2" >making software for smartphones, tablets and digital assistants.</h2>
    <p className="head2" >Yet mobile application development might seem daunting. Once you ve selected the OS platform or </p>
    <p className="head2" >platforms, you need to overcome the limitations of mobile devices and usher your app all the way</p>
    <p className="head2"  >past the potential hurdles of distribution. Fortunately, by following a few basic guidelines and </p>
    <p  className="head2" >best practices, you can streamline your application development journey.</p>
  </div>


        </>
    )
}

export default LandingNav;