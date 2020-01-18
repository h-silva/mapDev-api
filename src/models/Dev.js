const mongoose = require('mongoose');

const devSchhema = new mongoose.Schema({
    name: String,
    github_username: String,
    biografia : String,
    avatarUrl : String,
    techs: [String],

});
module.exports = mongoose.model('Dev',devSchhema)