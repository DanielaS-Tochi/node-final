const express = require('express');
const app = express();
const path = require('path');
const port = 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Serve static files
app.use(express.static(path.join(__dirname, 'public')));

//Usar las rutas del CRUD
const userRoutes = require('./routes/crudRoutes');
app.use('/users', userRoutes);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

