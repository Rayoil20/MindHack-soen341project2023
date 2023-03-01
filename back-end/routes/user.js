const { MongoClient, ObjectId} = require("mongodb");
const express = require('express');
const res = require("express/lib/response");
const router = express.Router();


const client = new MongoClient("mongodb+srv://MindHack:MindHack123$@cluster0.sdwjjsx.mongodb.net/test");


router.get('/:id', async function (req, res, next) {
    const db = client.db("MindHack");
    let body = {"username" : "tamere", "password" : "raasd", "email" : "allo@tamere.com"};
    const users = await db.collection("user").find({_id: new ObjectId("63fe6789ab517b13701d43cb")},
        {
            $set: body
        });

    console.log(users);
    res.status(200).json(users);
    next();
});

module.exports = router;
