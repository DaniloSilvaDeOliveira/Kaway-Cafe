const { Router } = require('express');
const authenticated = require('../api/middleware/authenticated');
const router = Router();

router
    .get('/', authenticated.pagUsuario)
    .post('/', authenticated.getAtributeFromToken)
    .patch('/', authenticated.updateAtribute)
module.exports = router;
