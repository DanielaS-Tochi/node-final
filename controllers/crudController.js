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
    const { id, name, email } = req.body;

    if (!id || !name || !email) {
        return
        res.status(400).json({ error: "Todos los campos son requeridos" });
    }
    connection.query('INSERT INTO users(id,name,email) VALUES (?, ?, ?)', [id, name, email], (error, results) => {
        if (error) {
            console.error('Error al insertar usuario:', error);
            return
            res.status(500).json({ error: 'Error interno al crear usuario' });
        }
        res.status(201).json({ message: 'Usuario creado correctamente', userId: results.insertId })
    });
};


//Obtener un usuario por Id
exports.getUserById = (req, res) => {
    const userId = req.params.id;
    connection.query('SELECT * FROM users WHERE id= ?', [userId], (err, results) => {
        if (err) {
            return res.status(500).json({ err: error.message });
        }
        if (results.length === 0) {
            return res.status(404).json({ err: 'User not found' });
        }
        res.json(results[0]);
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

