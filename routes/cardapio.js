const { Router } = require('express');
const produtoController = require('../api/controllers/produtoController.js');

const router = Router();


router.get('/', (req, res) => {
    res.sendFile('/views/cardapio.html', { root: './'});
});
router.get('/api', produtoController.getProdutos);

router.get('/api/:id', produtoController.getProduto);

module.exports = router;