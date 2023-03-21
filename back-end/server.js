
// CONTACT SYSADMIN CARLO FOR THE SERVER CONNECTION CREDENTIALS
// DONT FORGET TOO CHANGE YOUR .env file

const express = require("express");
const cors = require("cors");
require("dotenv").config();
const bodyParser = require('body-parser')

// app
const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

const authenticate = require("./routes/authenticate")
app.use("/authenticate", authenticate);

// port
const port = process.env.PORT || 5000;

// listener

const server = app.listen(port, () => 
    console.log('server is running on port ' + port ));

