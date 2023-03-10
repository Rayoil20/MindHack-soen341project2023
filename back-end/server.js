

// REFER TO SYSADMIN CARLO FOR ACCESS TO THE DB 
// CREDENTIALS NEED TO BE ADDED TO THE .env file 

const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const morgan = require("morgan");
require("dotenv").config();
const port = process.env.PORT || 5000;
app.use(morgan("dev"));
console.log(process.env.ATLAS_URI)
mongoose.connect(process.env.ATLAS_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("connection successful"))
.catch((err) => console.log("connection failed", err));

app.use(cors({origin:true, credentials: true}));
