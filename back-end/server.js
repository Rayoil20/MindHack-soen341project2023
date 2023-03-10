
// CONTACT SYSADMIN CARLO FOR THE SERVER CONNECTION CREDENTIALS
// DONT FORGET TOO CHANGE YOUR .env file

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const morgan = require("morgan");
require("dotenv").config();



// app
const app = express();

// db
console.log(process.env.ATLAS_URI)
mongoose.connect(process.env.ATLAS_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("connection successful"))
.catch((err) => console.log("connection failed", err));

// middlewares
app.use(morgan("dev"));
app.use(cors({origin:true, credentials: true}));


// routes
const testRoutes = require("./routes/record");
app.use("/", testRoutes);

// port
const port = process.env.PORT || 5000;

// listener

const server = app.listen(port, () => 
    console.log('server is running on port ' + port ));

