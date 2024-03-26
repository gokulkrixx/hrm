import React from "react";
import './adminlogin.css';
import { Link } from "react-router-dom";

function AdminloginNav({displayData}) {
    return (
        <>
        <meta charSet="UTF-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>ORIGINAL</title>
  <nav className="navbar1">
    <div className="navbar-container1 container">

      <div className="hamburger-lines">
        <span className="line line11" />
        <span className="line line22" />
        <span className="line line33" />
      </div>
      <ul className="menu-items1">
        <li>
        <Link to={"/"} ><a href="#">Home</a></Link>
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
      </ul>
      <h1 className="logoo">App</h1>
    </div>
  </nav>
        </>
    )
}

export default AdminloginNav;