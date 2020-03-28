const express = require('express');
const ongController = require('./controllers/ong-controller');
const incidentController = require('./controllers/incident-controller');
const profileController = require('./controllers/profile-controller');
const sessionController = require('./controllers/session-controller');


const routes = express.Router();

//a funcao assincrona se faz útil pelo insert poder demorar um pouco para ser concluido, então se 
//faz assim e coloca um 'await' na funcao, que faz ele acabar de executar o insert para só depois retornar.

routes.post('/sessions', sessionController.create);

routes.post('/ongs', ongController.create);
routes.get('/ongs', ongController.listAll);

routes.post('/incidents', incidentController.create);
routes.get('/incidents', incidentController.listAll);
routes.delete('/incidents/:id', incidentController.delete);

routes.get('/profile', profileController.assignedIncidents);

module.exports = routes;