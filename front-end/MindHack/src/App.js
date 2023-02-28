import logo from './logo.svg';
import React from "react";
import Profile from "./profile";
import {Route, Routes} from "react-router-dom";
import {dividerClasses} from "@mui/material";
import Navbar from "./components/Navbar";
import Jobs from "./jobs";
import Homepage from "./homepage";

function App() {

  return (
      <div>
       <Navbar/>
       <Routes>
           <Route path='/' element={<Homepage/>}/>
           <Route path='/profile' element={<Profile/>}/>
           <Route path='/job' element={<Jobs/>}/>
       </Routes>
      </div>
  );
}

export default App;
