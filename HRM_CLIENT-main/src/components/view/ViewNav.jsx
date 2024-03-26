import React from "react";
import './View.css';
import { Link } from "react-router-dom";

function ViewNav({displayData}){
    return (
        <>
                  <meta charSet="UTF-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>APPLICATION</title>
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
        <Link to={"/"} ><a href="#">Home</a></Link>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Menu</a>
        </li>
        {/* <li>
        <Link to={'/Adduserpage'}> <button >Adduser</button></Link>
        </li> */}
        <li>
         <button> <a href="#">Logout</a></button>
        </li>
      </ul>
      <h1 className="logo">App</h1>
    </div>
  </nav>
        
        </>

    )
}
export default ViewNav;