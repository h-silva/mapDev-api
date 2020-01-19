const {Router} = require('express');
const Dev = require('../models/Dev');
const ParseStringAsArray = require('../utils/ParseStringasArray')

module.exports = {
    async index(request, response){
        const {latitude, longitude, techs} = request.query;

        const techArray = ParseStringAsArray(techs);
   
        const devs = await Dev.find({
            techs : {
                $in: techArray,
            },
            location : {
                $near: {
                    $geometry: {
                        type: 'Point',
                        coordinates: [Number(longitude),Number(latitude)]
                    },
                $maxDistance : 10000
                } 
            } 
        });
        
        console.log(techArray);
        return response.json({devs: devs})
        
        }
}