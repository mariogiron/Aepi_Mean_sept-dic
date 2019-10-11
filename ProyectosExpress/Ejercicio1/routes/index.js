var express = require('express');
var router = express.Router();

router.get('/info', (req, res) => {
  res.send('Estoy en la url INFO');
});

router.get('/contact', (req, res) => {
  res.send('Estoy en la url CONTACT');
});

router.get('/about', (req, res) => {
  res.send('Estoy en la url ABOUT');
});

module.exports = router;
