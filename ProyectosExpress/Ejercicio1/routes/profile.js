var express = require('express');
var router = express.Router();

router.get('/main', (req, res) => {
    res.send('Estoy en la ruta PROFILE/MAIN');
});

router.get('/details', (req, res) => {
    res.send('Estoy en la ruta PROFILE/DETAILS');
});

module.exports = router;