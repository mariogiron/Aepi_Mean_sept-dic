var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { titles: 'Express' });
});

router.get('/usuarios', (req, res) => {
  res.send('Hola users');
})

module.exports = router;
