const express = require('express');
const router = express.Router();
const crudController = require('../controllers/crudController');

//Rutas para el CRUD de users
router.get('/api/users', crudController.getAllUsers);
router.post('/api/users', crudController.createUser);
router.put('/api/users', crudController.updateUser);
router.delete('/api/users', crudController.deleteUser);

module.exports = router;
