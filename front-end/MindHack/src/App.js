import logo from './logo.svg';
import React from "react";
import Profile from "./profile";
import {Route, Routes} from "react-router-dom";
import {dividerClasses} from "@mui/material";
import Navbar from "./components/Navbar";
import Jobs from "./jobs";
import Homepage from "./homepage";

function App() {
  const { MongoClient, ServerApiVersion } = require('mongodb');
  const uri = "mongodb+srv://carlocosta1:<TRlKq6oVy3RHX5tC>@cluster0.mdevfeh.mongodb.net/?retryWrites=true&w=majority";
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
  client.connect(err => {
    const collection = client.db("test").collection("Jobpostings");
    // perform actions on the collection object
  
    client.close();
  });
  
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
