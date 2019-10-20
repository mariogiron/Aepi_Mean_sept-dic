const express = require('express');
const router = express.Router();

let apiStudentsRouter = require('./api/students');
let apiUsersRouter = require('./api/users');

router.use('/students', apiStudentsRouter);
router.use('/users', apiUsersRouter);

module.exports = router;