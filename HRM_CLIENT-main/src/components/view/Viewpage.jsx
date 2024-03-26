import React, {useState} from "react";
import axios from 'axios';
import './View.css';
import {useParams} from "react-router-dom";

async function getData(userId){
  try{
    console.log("Reached view page");
    const token = localStorage.getItem('token');
    console.log("view page token : ",token);
    const response = await axios.get(`http://localhost:2005/users/${userId}`,{
      headers:{
        "Authorization":`Bearer${token}`
      }
    });
    return response.data;
  }catch(error){
    console.error("error fetching data:",error);
    throw error;//Rethrow the error to be caught by the caller
  }
}

function Viewpage(){
  console.log("reached view page");
  const{userId}=useParams();
  const[user,setUser] = useState(null);
  useEffect(()=>{
    getData(userId)
    .then(parsedData => setUser(parsedData.data))
    .catch(error =>{
      console.error("Error featching data:",error);
      setUser(null);//Set user to null on error
    });
  },[userId]);
  if (!user){
    return <div>Loading...</div>;// Show loading indicator while fetching data
  }
    return(
        <>
        <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>viewpage</title>
  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
    rel="stylesheet"
    integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
    crossOrigin="anonymous"
  />
  <link rel="stylesheet" href="style.css" />
  <h1>User Details</h1>
  <div className="container">
    <p>First Name:{user.firstname} </p>
    <p>Last Name:{user.lastname}</p>
    <p>Email:{user.email}</p>
    <p>Password:{user.phone}</p>
    <button className="btn edit">Edit</button>
    <button className="btn delete" onclick="confirmDelete()">
      Delete
    </button>
    <button className="btn save">Save</button>
  </div>
</>
       </>
    )
}
export default Viewpage;