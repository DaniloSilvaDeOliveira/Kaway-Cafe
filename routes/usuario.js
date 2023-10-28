const { Router } = require('express');
const router = Router();

router
    .post('/')
    .get('/')
    .get('/id/:id')
    .put('/id/:id')
    .delete('/id/:id')

module.exports = router;
