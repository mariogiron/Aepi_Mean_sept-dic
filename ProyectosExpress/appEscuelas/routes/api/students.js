const express = require('express');
const router = express.Router();
const Student = require('../../models/student');
const middlewares = require('../middlewares');

router.use(middlewares.checkToken);

// GET http://localhost:3000/api/students
router.get('/', (req, res) => {
    Student.find((err, estudiantes) => {
        if (err) return res.json(err);
        res.json(estudiantes);
    });
})

router.get('/:idEstudiante', (req, res) => {
    Student.findById(req.params.idEstudiante, (err, estudiante) => {
        res.json(estudiante);
    })
});

// POST http://localhost:3000/api/students
router.post('/', (req, res) => {
    // Compruebo si el valor de activo existe antes de insertar
    req.body.activo = req.body.activo ? req.body.activo : false;
    Student.create(req.body).then(estudiante => {
        res.json(estudiante);
    })
});

// PUT http://localhost:3000/api/students
router.put('/', (req, res) => {
    Student.findByIdAndUpdate(req.body.idEstudiante, req.body, { new: true }, (err, estudiante) => {
        res.json(estudiante);
    });
});

router.delete('/', (req, res) => {
    Student.findByIdAndDelete(req.body.idEstudiante, (err, estudiante) => {
        // res.json(estudiante);
        res.json({ success: 'Se ha borrado correctamente' });
    });
});

router.delete('/:idEstudiante', (req, res) => {
    Student.findByIdAndDelete(req.params.idEstudiante, (err, estudiante) => {
        // res.json(estudiante);
        res.json({ success: 'Se ha borrado correctamente' });
    });
});

module.exports = router;