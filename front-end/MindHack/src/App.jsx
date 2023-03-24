import logo from './logo.svg';
import React, { useState } from "react";
import Profile from "./profile";
import {Route, Routes} from "react-router-dom";
import {dividerClasses} from "@mui/material";
import Navbar from "./components/Navbar";
import Jobs from "./jobs";
import Homepage from "./homepage";
import Edit_Profile from "./edit_profile";

function App() {
  

  
  return (
      <div>
       <Navbar/>
       <Routes>
           <Route path='/' element={<Homepage/>}/>
           <Route path='/profile' element={<Profile/>}/>
           <Route path='/job' element={<Jobs/>}/>
           <Route path='/edit_profile' element={<Edit_Profile/>}/>
       </Routes>
      </div>
  );
}

export default App;
