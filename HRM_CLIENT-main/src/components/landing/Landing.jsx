import React, { useState } from "react";
import Landingpage from "./Landingpage";
import LandingNav from "./LandingNav";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Adminlogin from "../adminlogin/Adminlogin";
import Adduser from "../adduser/Adduser";
import Admin from "../Admin/Admin";
import Adduserpage from "../adduser/Adduserpage";
import AdduserNav from "../adduser/AdduserNav";
import Viewpage from "../view/Viewpage";
import ViewNav from "../view/ViewNav";
// import Usermanagepage from "../User manage/Usermanagepage";


function Landing() {
  

    return (
        <Router>
            <>
                <Routes>
                <Route path="/" exact element={<LandingNav/>} />
                <Route path="/" exact element={<Landingpage/>} />
                <Route path="/adminlogin" exact element={<Adminlogin/>} />
                <Route path="/adduser" exact element={<Adduser/>} />
                <Route path="/Admin" exact element={<Admin/>}/>
                <Route path="/Adduserpage" exact element={<Adduserpage/>}/>
                <Route path="/AdduserNav" exact element={<AdduserNav/>}/>
                <Route path="/Viewpage" exact element={<Viewpage/>}/>
                <Route path="/ViewNav" exact element={<ViewNav/>}/>
                </Routes>
            </>
        </Router>
    )
}

export default Landing;