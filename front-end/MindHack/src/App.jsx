import logo from './logo.svg';
import React, { useState } from "react";
import Profile from "./profile";
import {Route, Routes} from "react-router-dom";
import {dividerClasses} from "@mui/material";
import Navbar from "./components/Navbar";
import Jobs from "./jobs";
import Homepage from "./homepage";
import Upload from "./upload";

function App() {
  

  
  return (
      <div>
       <Navbar/>
       <Routes>
           <Route path='/' element={<Homepage/>}/>
           <Route path='/profile' element={<Profile/>}/>
           <Route path='/job' element={<Jobs/>}/>
           <Route path='/upload' element={<Upload/>}/>
       </Routes>
      </div>
  );
}

export default App;
