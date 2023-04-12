import logo from './logo.svg';
import React, { useState } from "react";
import Profile from "./profile";
import {Route, Routes} from "react-router-dom";
import {dividerClasses} from "@mui/material";
import Navbar from "./components/Navbar";
import Jobs from "./jobs";
import Homepage from "./homepage";
import Employer_Post from "./employer_posting";

function App() {
  

  
  return (
      <div>
       <Navbar/>
       <Routes>
           <Route path='/' element={<Homepage/>}/>
           <Route path='/profile' element={<Profile/>}/>
           <Route path='/job' element={<Jobs/>}/>
           <Route path="/employer_post" element={<Employer_Post/>}/>
       </Routes>
      </div>
  );
}

export default App;
