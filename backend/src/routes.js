const express = require('express');
const ongController = require('./controllers/ong-controller');
const incidentController = require('./controllers/incident-controller');
const profileController = require('./controllers/profile-controller');
const sessionController = require('./controllers/session-controller');

const { celebrate, Segments, Joi } = require('celebrate');

const routes = express.Router();

//a funcao assincrona se faz útil pelo insert poder demorar um pouco para ser concluido, então se 
//faz assim e coloca um 'await' na funcao, que faz ele acabar de executar o insert para só depois retornar.

routes.post('/sessions', sessionController.create);

routes.get('/ongs', ongController.listAll);
routes.post('/ongs', celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.string().required().min(10).max(11),
        city: Joi.string().required(),
        uf: Joi.string().required().length(2),
    }),
}), ongController.create);

routes.get('/profile', celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required(),
    }).unknown(),
}), profileController.assignedIncidents);

routes.get('/incidents', celebrate({
    [Segments.QUERY]: Joi.object().keys({
        page: Joi.number(),
    }),
}) , incidentController.listAll);


routes.post('/incidents', incidentController.create);

routes.delete('/incidents/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required(),
    }),
}) , incidentController.delete);


module.exports = routes;