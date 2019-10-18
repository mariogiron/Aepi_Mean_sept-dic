let express = require('express');
let router = express.Router();
let Student = require('../models/student');

// Muestra la lista de todos los estudiantes
// Recupera los estudiantes y los pasa a la vista list.pug
// http://localhost:3000/students
router.get('/', (req, res) => {
    Student.find((err, arrStudents) => {
        res.render('students/list', {
            arrEstudiantes: arrStudents
        });
    })
});

// Muestra el formulario para crear un nuevo estudiante
// http://localhost:3000/students/new
router.get('/new', (req, res) => {
    res.render('students/new');
});

// Muestra el formulario para editar un estudiante
// Recupera el estudiante de la Base de Datos a partir de la URL
// Pasa ese estudiante a la vista edit.pug
router.get('/edit/:idEstudiante', (req, res) => {
    Student.findById(req.params.idEstudiante, (err, student) => {
        res.render('students/edit', { estu: student });
    });
});

router.get('/delete/:idEstudiante', (req, res) => {
    Student.findByIdAndDelete(req.params.idEstudiante, (err, student) => {
        res.redirect('/students');
    });
});

// Muestra los datos de un único estudiante
// Recupera el estudiante de la Base de Datos a partir de la URL
// Pasa este estudiante a la vista detail.pug
router.get('/:idEstudiante', (req, res) => {
    Student.findById(req.params.idEstudiante, (err, student) => {
        if (err) return res.send('¡Error!');
        res.render('students/detail', { estu: student });
    });
});

// Recibe mediante POST los datos del formulario de creación de estudiantes
// Crea un nuevo estudiante
router.post('/create', (req, res) => {
    Student.create(req.body).then(student => {
        res.redirect('/students');
    });
});

// Recibe mediante POST los datos del formulario de edición de estudiantes
// Edita el estudiante a partir del ID
router.post('/update', (req, res) => {
    Student.findByIdAndUpdate(req.body.idEstudiante, req.body, (err, student) => {
        res.redirect('/students');
    })
})

module.exports = router;