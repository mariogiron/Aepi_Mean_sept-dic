let express = require('express');
let router = express.Router();
let Student = require('../models/student');

// Este fichero maneja todas las rutas con /test

router.get('/', (req, res) => {
    let stu1 = new Student();
    stu1.nombre = 'Mario';
    stu1.apellidos = 'Girón';
    stu1.edad = 36;
    stu1.dni = '90988778J';
    stu1.mail = 'mario@mail.com';
    stu1.activo = true;
    stu1.save();
    res.send('Todo Correcto');
});

router.get('/insert_v2', (req, res) => {
    Student.create({
        nombre: 'Pepe',
        apellidos: 'García',
        edad: 23,
        dni: '78233991K',
        mail: 'pepe@hotmail.com',
        activo: false
    }).then(student => {
        res.json(student);

    }).catch(err => {
        res.json(err);
    });
});

router.get('/insert_v3', async (req, res) => {
    let student = await Student.create({
        nombre: 'Rosa',
        apellidos: 'López',
        edad: 43,
        dni: '78254991K',
        mail: 'rosa@mail.com',
        activo: true
    });
    res.json(student);
});

module.exports = router;