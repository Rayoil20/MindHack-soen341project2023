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
        req.user._id = req.user._id.toString()
        next();
        return;
    }

    res.status(403).json({message:"Token is not valid"});
    return;

}


router.get("/",async function (req,res,next){

    const db = client.db("MindHack");

    const jobs = await db.collection("Jobs").find({}).toArray();

    res.status(200).json(jobs);
    return;
});

router.post("/",checkToken,async function (req,res,next){

    const title = req.body.title;
    const description = req.body.description;
    const location = req.body.location;
    const salary = req.body.salary;
    const type = req.body.type;
    const userid = req.user._id;

    if ( (title == undefined)  (description == undefined)  (location == undefined)  (type == undefined)  (salary == undefined) || (userid == undefined)){
        res.status(400).json({ message: 'BAD REQUEST' });
        return;
    }

    const db = client.db("MindHack");

    const job = await db.collection("Jobs").insertOne({"title":title,"description":description,"location":location,"salary":salary,"type":type,"userid":userid});

    res.status(200).json({"message" : "Job uploaded"})
    return;

});


module.exports = router;