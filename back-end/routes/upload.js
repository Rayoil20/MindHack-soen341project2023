const { MongoClient, ObjectId} = require("mongodb");
const express = require('express');
const res = require("express/lib/response");
const router = express.Router();
const aws = require("aws-sdk");
const crypto = require("crypto");
const multer = require("multer");
const jwt = require("jsonwebtoken");
const client = new MongoClient("mongodb+srv://MindHack:MindHack123$@cluster0.sdwjjsx.mongodb.net/test");
const storage = multer.memoryStorage()
const upload = multer({ storage: storage })


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


router.post("/cv",checkToken ,upload.single("data"),async function (req,res,next){

    const db = client.db("MindHack");

    if (!req.file) {
        res.status(400).json({ error: "No file uploaded" });
        return;
    }

    console.log(req.user);
    const { buffer } = req.file;
    const { userId } = req.body;

    const bytes = crypto.randomBytes(16);
    const cvName = bytes.toString("hex") + ".pdf";
    const folderName = "cv/";

    ////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////
    ////////////////DO NOT TOUCH NEVER TOUCH THIS///////////////////
    ////////////////////////////////////////////////////////////////
    //
    const s3 = new aws.S3({
        region: "us-east-2",
        accessKeyId: "AKIAUXEAUFY4ZJJT2WUU",
        secretAccessKey: "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",
        signatureVersion: "v4",
    });
    ////////////////////////////////////////////////////////////////
    ////////////////DO NOT TOUCH NEVER TOUCH THIS///////////////////
    /////////////////////////SOPHIE/////////////////////////////////
    ////////////////////////////////////////////////////////////////

    const uploadedCV = await s3
        .upload({
            Bucket: "mindhack1",
            Key: folderName + cvName,
            Body: buffer,
        })
        .promise();

    await db.collection("user").updateOne(
        {_id : new ObjectId(req.user._id)},
        {$set: {"cv" : uploadedCV.Location} },
        { upsert: true });

    res.status(201).json({ Description: "CV Uploaded" });
    return;

})
module.exports = router;

