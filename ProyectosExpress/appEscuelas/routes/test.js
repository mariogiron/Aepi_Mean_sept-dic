let express = require('express');
let router = express.Router();
let Student = require('../models/student');
let Product = require('../models/product');

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

router.get('/insert_product', async (req, res) => {
    try {
        let prod = await Product.create({
            nombre: 'Macbook 13',
            precio: 1500,
            departamento: 'Informatica',
            activo: true
        });
        res.json(prod);
    } catch (err) {
        console.log(err);
    }

    // Product.create({
    //     nombre: 'Macbook 15',
    //     precio: 2500,
    //     departamento: 'Informatica',
    //     activo: false
    // }).then((prod) => {
    //     res.json(prod);
    // }).catch(err => {
    //     console.log(err);
    // })
});

router.get('/filtro', (req, res) => {
    // Product.find({
    //     precio: { $gt: 50, $lt: 1600 },
    //     activo: true
    // }, (err, products) => {
    //     res.json(products);
    // });

    Product.find({
        nombre: 'Roomba',
        $or: [
            { precio: 1500 },
            { activo: true }
        ]
    }, (err, products) => {
        if (err) return res.json(err)
        res.json(products);
    });
});

router.get('/mismo_departamento', (req, res) => {
    let producto1 = new Product();
    producto1.departamento = 'Informatica';
    producto1.nombre = "Producto Inventado";
    console.log(producto1.devuelveNombre());
    producto1.mismoDepartamento(function (err, productos) {
        res.json(productos);
    });
});

router.get('/productos_activos', (req, res) => {
    Product.activos((err, productos) => {
        res.json(productos);
    });
});

router.get('/relacion', (req, res) => {
    Product.activos((err, prods) => {
        let estudiante = new Student();
        estudiante.nombre = 'Luis';
        estudiante.apellidos = 'Molina';
        estudiante.productos = prods;
        estudiante.save();
        res.json(estudiante);
    });
})

module.exports = router;