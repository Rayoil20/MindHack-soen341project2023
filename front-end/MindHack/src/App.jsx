import logo from './logo.svg';
import React, { useState } from "react";
import Profile from "./profile";
import {Route, Routes} from "react-router-dom";
import {dividerClasses} from "@mui/material";
import Navbar from "./components/Navbar";
import Jobs from "./jobs";
import Homepage from "./homepage";
import Edit_Profile from "./edit_profile";
import Admin_Manage from "./admin_profile_manage";
import Employer_Post from "./employer_posting";


function App() {
  

  
  return (
      <div>
       <Navbar/>
       <Routes>
           <Route path='/' element={<Homepage/>}/>
           <Route path='/profile' element={<Profile/>}/>
           <Route path='/job' element={<Jobs/>}/>
           <Route path='/admin_manage' element={<Admin_Manage/>}/>
           <Route path="/employer_post" element={<Employer_Post/>}/>
           <Route path='/edit_profile' element={<Edit_Profile/>}/>
       </Routes>
      </div>
  );
}

export default App;
