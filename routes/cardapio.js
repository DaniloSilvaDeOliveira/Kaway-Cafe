const { Router } = require('express');
const produtoController = require('../api/controllers/produtoController.js');

const router = Router();


router.get('/', produtoController.getProdutos);

router.get('/:id', produtoController.getProduto);

module.exports = router;