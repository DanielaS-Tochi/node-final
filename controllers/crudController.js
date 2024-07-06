const connection = require('../models/db');

//Obtener todos los usuarios
exports.getAllUsers = (req, res) => {
    connection.query('SELECT * FROM users', (err, results) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.json(results);
    });
};

//Crear un nuevo usuario
exports.createUser = (req, res) => {
    const { name, email } = req.body;
    connection.query('INSERT INTO users (name, email) VALUES (?, ?)', [name, email], (err, results) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.status(201).send('User created');
    });
};

//Actualizar un usuario
exports.updateUser = (req, res) => {
    const { id } = req.params;
    const { name, email } = req.body;
    connection.query('UPDATE users SET name = ?, email = ? WHERE id = ?', [name, email, id], (err, results) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.send('User updated');
    });
};

//Eliminar un usuario
exports.deleteUser = (req, res) => {
    const { id } = req.params;
    connection.query('DELETE FROM users WHERE id = ?', [id], (err, results) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.send('User deleted');
    });
};

