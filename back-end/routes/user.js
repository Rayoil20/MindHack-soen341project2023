const { MongoClient, ObjectId} = require("mongodb");
const express = require('express');
const res = require("express/lib/response");
const router = express.Router();


const client = new MongoClient("mongodb+srv://MindHack:MindHack123$@cluster0.sdwjjsx.mongodb.net/test");


router.get('/:id', async function (req, res, next) {


});

module.exports = router;
