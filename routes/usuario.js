const { Router } = require('express');
const authenticated = require('../api/middleware/authenticated');
const router = Router();

router
    .post('/nome', authenticated.getName)
module.exports = router;
