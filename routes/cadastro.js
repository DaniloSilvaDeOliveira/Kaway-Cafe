const { Router } = require('express');
const UsuarioController = require('../api/controllers/usuarioController');

const router = Router();

router
    .post('/', UsuarioController.reqCadastrarUsuario)
    .get('/', UsuarioController.pagCadastro);

module.exports = router;