const mongoose = require('mongoose');

/*
const user = new mongoose.Schema({
    username: String,
    password: String,
    email: String,
    created: { type: Date, default: Date.now }
});

export mongoose.model('User', user);
*/

const user = new mongoose.Schema({
    username: String,
    password: String,
    email: String,
    created: { type: Date, default: Date.now }
});

exports.User = mongoose.model('user', user);