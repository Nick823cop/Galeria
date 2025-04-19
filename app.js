// Importaciones
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

// Rutas
const rutasUsuario = require('./routes/usuario.routes');
const rutasLogin = require('./routes/login.routes');
const rutasGaleria = require('./routes/galeria.routes');
 


// App
const app = express();
const port = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json());

// Rutas públicas
app.use('/api/usuarios', rutasUsuario);
app.use('/api/login', rutasLogin);
app.use('/api/galeria', rutasGaleria);



// Ruta raíz
app.get('/', (req, res) => {
  res.send('Servidor funcionando correctamente');
});

// Conexión a MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('Conexión a MongoDB exitosa');

    // Iniciar el servidor
    app.listen(port, () => {
      console.log(`Servidor escuchando en http://localhost:${port}`);
    });
  })
  .catch((error) => {
    console.error('Error conectando a MongoDB:', error);
  });


