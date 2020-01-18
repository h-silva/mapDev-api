const { Router} = require('express');
const Devcontroller = require("./controllers/DevController");
const routes = Router();

routes.post('/devs', Devcontroller.store);
routes.get('/devs',Devcontroller.index);

module.exports = routes;