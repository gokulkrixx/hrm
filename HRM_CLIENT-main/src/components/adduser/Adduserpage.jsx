import React,{useState} from "react";
import axios from "axios";
import './adduser.css'
import {useNavigate} from "react-router-dom";

async function submitForm() {
  let firstname = document.getElementById('firstname').value;
  console.log("first name : ", firstname);

  let lastname = document.getElementById('lastname').value;
  console.log("last name : ", lastname);

  let email = document.getElementById('email').value;
  console.log("email : ", email);

  let password = document.getElementById('password').value;
  console.log("password : ", password);

  let data = {
      firstname,
      lastname,
      email,
      password
  }

  let json_data = JSON.stringify(data);

  //get jwt token from localstorage
  let token = localStorage.getItem('token');
  console.log("token : ", token);

  let response = await fetch('http://localhost:3001/users', {
      "method" : "POST",
      "headers" : {
          "Content-Type" : "application/json",
          "authorization" : `Bearer ${token}`,
      },
      "body" : json_data,
  });

  let parsed_response = await response.json();

  if(parsed_response.success) {
      alert("Form submitted successfully");
  }else {
      alert(parsed_response.message);
  }
}


function Adduserpage() {
    return (
<>
<meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Document</title>
  <form>
    <h2 className="heading">Add user</h2>
  <label htmlFor="first_name">First Name:</label>
  <input type="text" id="first_name" name="first_name" required="" />
  <label htmlFor="last_name">Last Name:</label>
  <input type="text" id="last_name" name="last_name" required="" />
    <label htmlFor="email">Email Id:</label>
    <input type="email" id="login_email" name="login_email" required="" />
    <label htmlFor="password">Password:</label>
    <input
      type="password"
      id="login_password"
      name="login_password"
      required=""
    />
    <button   className="but_user" type="button">
      SUBMIT
    </button>
  </form>
</>
    )

}
export default Adduserpage;