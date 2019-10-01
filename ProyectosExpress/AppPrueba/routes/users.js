var express = require('express');
var router = express.Router();

router.use((req, res, next) => {
  let num = Math.random();
  if (num > 0.9) {
    res.send('Se terminó!!');
  } else {
    next();
  }
});

/* GET users listing. */
// http://localhost:3000/users
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

// http://localhost:3000/users/new
router.get('/new', (req, res) => {
  res.send('Users NEW');
});

// http://localhost:3000/users/json
router.get('/json', (req, res) => {
  let usuarios = [
    { nombre: 'Mario', apellidos: 'Girón', edad: 35 },
    { nombre: 'Rosa', apellidos: 'Martínez', edad: 27 },
    { nombre: 'Ramón', apellidos: 'García', edad: 56 }
  ];
  console.log(JSON.stringify(usuarios));
  res.json(usuarios);
});

router.get('/redirecciona', (req, res) => {
  res.redirect('/');
})

module.exports = router;
