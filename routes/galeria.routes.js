const express = require('express');
const router = express.Router();
const {
  crearGaleria,
  obtenerGaleria,
  obtenerGaleriaPorId,
  actualizarGaleria,
  eliminarGaleria
} = require('../controllers/galeria.controller');
 
router.post('/', crearGaleria);
router.get('/', obtenerGaleria);
router.get('/:id', obtenerGaleriaPorId);
router.put('/:id', actualizarGaleria);
router.delete('/:id', eliminarGaleria);
 
module.exports = router;

