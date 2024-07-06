const express = require('express');
const app = express();
const path = require('path');
const crudRoutes = require('./routes/crudRoutes');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Serve static files
app.use(express.static(path.join(__dirname, 'public')));

//Usar las rutas del CRUD
app.use('/api', crudRoutes);

app.listen(4000, () => {
    console.log('Server is running on port 4000');
});

