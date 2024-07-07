const express = require('express');
const router = express.Router();
const crudController = require('../controllers/crudController');

//Rutas para el CRUD de users
router.get('/users', crudController.getAllUsers);
router.post('/users', crudController.createUser);
router.put('/users/:id', crudController.updateUser);
router.delete('/users/:id', crudController.deleteUser);

module.exports = router;
