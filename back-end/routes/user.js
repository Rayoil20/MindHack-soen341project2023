const { MongoClient, ObjectId} = require("mongodb");
const express = require('express');
const res = require("express/lib/response");
const router = express.Router();


const client = new MongoClient("mongodb+srv://MindHack:MindHack123$@cluster0.sdwjjsx.mongodb.net/test");


router.get('/:id', async function (req, res, next) {

    if (!req.query.id || res.query.id === ""){
        res.status(400).json({"Message" : "Bad request"});
        return;
    }

    const db = client.db("MindHack");
    const users = await db.collection("user").findOne({_id: new ObjectId(req.query.id)});

    res.status(200).json(users);
    return;
});

module.exports = router;
