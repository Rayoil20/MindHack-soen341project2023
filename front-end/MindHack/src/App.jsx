import logo from './logo.svg';
import React, { useState } from "react";
import Profile from "./profile";
import {Route,Routes} from "react-router-dom";
import {dividerClasses} from "@mui/material";
import Navbar from "./components/Navbar";
import Jobs from "./jobs";
import Employer_Post from "./employer_posting";
import Homepage from "./homepage";
import Upload from "./upload";
import Edit_Profile from "./edit_profile";
import Admin_Manage from "./admin_profile_manage";
import SignIn from "./login";
import Signup from "./signup";
import SignupPage from "./signup";


function App() {
  

  
  return (
      <div>
       <Navbar/>
       <Routes>
           <Route path='/' element={<Homepage/>}/>
           <Route path='/profile' element={<Profile/>}/>
           <Route path='/upload' element={<Upload/>}/>
           <Route path='/admin_manage' element={<Admin_Manage/>}/>
           <Route path='/job' element={<Jobs/>}/>
           <Route path='/employer_post' element={<Employer_Post/>}/>
           <Route path='/edit_profile' element={<Edit_Profile/>}/>
           <Route path='/login' element={<SignIn/>}/>
           <Route path='/signup' element={<SignupPage/>}/>
       </Routes>
      </div>
  );
}

export default App;
