const express = require('express');
const res = require("express/lib/response");
const router = express.Router();


router.get('/:id', function(req, res,next){
    res.send('whats up');
    next();
    })





module.exports = router;