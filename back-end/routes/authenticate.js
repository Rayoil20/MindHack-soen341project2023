const { MongoClient, ObjectId} = require("mongodb");
const express = require('express');
const res = require("express/lib/response");
const router = express.Router();
const jwt = require("jsonwebtoken");
const client = new MongoClient("mongodb+srv://MindHack:MindHack123$@cluster0.sdwjjsx.mongodb.net/test");


async function checkToken (req, res, next) {
    const token = req.headers["authorization"];
    let decoded;

    try {
        decoded = jwt.verify(token, process.env.JWT_ACCESS_KEY);
    }
    catch (Error) {
       res.status(403).json({message:"Token is not valid"});
        return;

    }
    const db = client.db("MindHack");


    const doesExist = await db.collection("user").findOne({"email": decoded.email, "password": decoded.password});

    //If the user already exists, send a message
    if (doesExist) {
        req.user = doesExist;
        req.user = req.user._id.toString()
        next();
        return;
    }

    res.status(403).json({message:"Token is not valid"});
    return;

}


router.post("/login", async function (req,res,next){
    const email = req.body.email;
    const password = req.body.password;

    const db = client.db("MindHack");

    const user = await db.collection("user").findOne({"email": email, "password" : password});

    if (user){
        const token = jwt.sign({"email": email, "password" : password}, process.env.JWT_ACCESS_KEY);
        res.send({token: token}).json;
        return;
    }

    res.status(400).json({ message: 'BAD REQUEST' });
    return;
});

//Post request function to authenticate a user
router.post("/register", async function (req,res,next){
    //Variables to get from the request
    const email = req.body.email;
    const name = req.body.name;
    const lastname = req.body.lastname;
    const type = req.body.type;
    const password = req.body.password;


    if ((email == undefined) || (name == undefined) || (lastname == undefined) || (type == undefined) || (password == undefined)){
        res.status(400).json({ message: 'BAD REQUEST' });
        return;
    }
    //Store the database in a variable
    const db = client.db("MindHack");
    //Check if the user already exists and store the result in a variable
    const doesExist =  await db.collection("user").findOne({"email": email});
    //If the user already exists or the request is invalid, send a message
    if (doesExist){
        //SEND THAT IT ALREADY EXISTS
        res.status(400).json({ message: 'BAD REQUEST' });
        return;
    }

    const user = await db.collection("user").insertOne({"email":email, "name" : name, "lastname" : lastname, "type" : type, "password" : password});
    const token = jwt.sign({  "email": email, "password" : password}, process.env.JWT_ACCESS_KEY);
    res.send({token: token}).json;
    return;

});

module.exports = router;
