const mongoose = require('mongoose');
const PointSchema = require('./utils/PointsSchema')

const devSchhema = new mongoose.Schema({
    name: String,
    github_username: String,
    biografia : String,
    avatarUrl : String,
    techs: [String],
    location : {
        type: PointSchema,
        index: '2dsphere'
    }

});
module.exports = mongoose.model('Dev',devSchhema)