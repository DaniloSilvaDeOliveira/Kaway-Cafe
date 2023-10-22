const { Router } = require('express');

const router = Router();

router.get('/', (req, res) => {
    res.sendFile('/views/cardapio.html', { root: './'});
});

router.get('/api', (req, res) => {
    
});

module.exports = router;