import aws from "aws-sdk";
import process from "process";
const { MongoClient, ObjectId} = require("mongodb");
const express = require('express');
const res = require("express/lib/response");
const router = express.Router();
import crypto from "crypto";

const client = new MongoClient("mongodb+srv://MindHack:MindHack123$@cluster0.sdwjjsx.mongodb.net/test");


router.post("/cv", async function (req,res,next){

    const db = client.db("MindHack");

    const userId = "64190716a8d179925f113685";

    if (!req.file) {
        return res.status(400).json({ error: "No file uploaded" });
    }
    const { buffer } = req.file;

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
        {_id : new ObjectId(userId)},
        {$set: {"cv" : uploadedCV.Location} },
        { upsert: true });

    res.status(201).json({ Description: "CV Uploaded" });
    return;

})


