
// CONTACT SYSADMIN CARLO FOR THE SERVER CONNECTION CREDENTIALS
// DONT FORGET TOO CHANGE YOUR .env file

const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser')
require("dotenv").config();

// app
const app = express();

app.use(cors({
    origin: '*'
}));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

const authenticate = require("./routes/authenticate");
const upload = require("./routes/upload");
const jobs = require("./routes/jobs");

app.use("/authenticate", authenticate);
app.use("/upload", upload);
app.use("/job",jobs);

// port
const port = process.env.PORT || 5000;

// listener

const server = app.listen(port, () => 
    console.log('server is running on port ' + port ));

