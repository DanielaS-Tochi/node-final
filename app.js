const express = require('express');
const app = express();
const mysql = require('mysql2');
const path = require('path');
const port = 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));

const crudRoutes = require('./routes/crudRoutes');
app.use('/users', crudRoutes);

const crudController = require('./controllers/crudController');

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post('/users', (req, res) => {
    const { name, email } = req.body;
    console.log(`${name}, Email: ${email}`);
    res.send('Usuario creado correctamente');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

