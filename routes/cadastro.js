const { Router } = require('express');

const router = Router();

router.get('/', (req, res) => {
    res.sendFile('/views/cadastro.html', { root: './'});
});

module.exports = router;