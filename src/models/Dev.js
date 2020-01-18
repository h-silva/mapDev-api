const mongoose = require('mongoose');

const devSchhema = new mongoose.Schema({
    name: String,
    github_username: String,
    biografia : String,
    avatarUrl : String,
    techs: [Strings],

});
module.exports = mongoose.model('Devs',Schema)