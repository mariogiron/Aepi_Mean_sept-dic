const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../../models/user');

router.post('/register', (req, res) => {
    req.body.password = bcrypt.hashSync(req.body.password, 10);
    User.create(req.body).then(user => {
        res.json(user);
    });
});

router.post('/login', (req, res) => {
    // Recupero todos los usuarios con el mail que viene dentro del body
    User.find({
        mail: req.body.mail
    }, (err, users) => {
        console.log(req.body.password);
        console.log(users[0].password);
        if (users.length == 1) {

        } else {
            res.json({ error: 'Usuario y/o password incorrecta' });
        }
    });
})

module.exports = router;