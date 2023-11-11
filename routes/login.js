const { Router } = require('express');
const usuarioController = require('../api/controllers/usuarioController');

const router = Router();

router
.get('/', usuarioController.pagLogin)
.post('/', usuarioController.login);
;

module.exports = router;
