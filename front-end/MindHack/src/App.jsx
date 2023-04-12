import logo from './logo.svg';
import React, { useState } from "react";
import Profile from "./profile";
import {Routes} from "react-router-dom";
import {dividerClasses} from "@mui/material";
import Navbar from "./components/Navbar";
import Jobs from "./jobs";
import Homepage from "./jobs";
import Employer_Post from "./employer_posting";
import {BrowserRouter} from "react-router-dom";
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';


function App() {
  

  
  return (
      <div>
       <Navbar/>
       <Routes>
           <Route path='/' element={<Homepage/>}/>
           <Route path='/profile' element={<Profile/>}/>
           <Route path='/jobs' element={<Jobs/>}/>
           <Route path='/employer_post' element={<Employer_Post/>}/>


       </Routes>
      </div>
  );
}

export default App;
