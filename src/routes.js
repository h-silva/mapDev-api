const { Router} = require('express');
const axios = require("axios");
const routes = Router();
const Devs = require("./models/Dev");
routes.post('/devs', async (request, response) => {

    const {github_username, techs} = request.body;
    
    const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);

    const { name = login, avatar_url, bio } = apiResponse.data;
    const techArray = techs.split(',').map(tech => tech.trim());
    console.log(apiResponse.data);
    return response.json({message:'Hello World'});
});

module.exports = routes;