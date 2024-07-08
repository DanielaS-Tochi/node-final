const express = require('express');
const router = express.Router();
const crudController = require('../controllers/crudController');

//Rutas para el CRUD de users
router.get('/', crudController.getAllUsers);
router.post('/', crudController.createUser);
router.get('/:id', crudController.getUserById);
router.put('/:id', crudController.updateUser);
router.delete('/:id', crudController.deleteUser);

module.exports = router;
