const { Router } = require('express');
const agendaController = require('../api/controllers/agendaController');

const router = Router();

router
.get('/', agendaController.pagAgenda)
.post('/', agendaController.showAgenda)
.get('/:data', agendaController.agendaLivre)
.post('/agendar', agendaController.agendar);

module.exports = router;
