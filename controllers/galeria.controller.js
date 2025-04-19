const Galeria = require('../models/Galeria');
 
// Crear imagen

const crearGaleria = async (req, res) => {

  try {

    const nuevaEntrada = new Galeria(req.body);

    await nuevaEntrada.save();

    res.status(201).json(nuevaEntrada);

  } catch (error) {

    res.status(400).json({ mensaje: 'Error al guardar en galería', error });

  }

};
 
// Obtener todas

const obtenerGaleria = async (req, res) => {

  try {

    const lista = await Galeria.find();

    res.status(200).json(lista);

  } catch (error) {

    res.status(500).json({ mensaje: 'Error al obtener la galería', error });

  }

};
 
// Obtener por ID

const obtenerGaleriaPorId = async (req, res) => {

  try {

    const entrada = await Galeria.findById(req.params.id);

    if (!entrada) {

      return res.status(404).json({ mensaje: 'Elemento no encontrado' });

    }

    res.status(200).json(entrada);

  } catch (error) {

    res.status(500).json({ mensaje: 'Error al buscar el elemento', error });

  }

};
 
// Actualizar

const actualizarGaleria = async (req, res) => {

  try {

    const actualizada = await Galeria.findByIdAndUpdate(

      req.params.id,

      req.body,

      { new: true, runValidators: true }

    );

    if (!actualizada) {

      return res.status(404).json({ mensaje: 'Elemento no encontrado' });

    }

    res.status(200).json(actualizada);

  } catch (error) {

    res.status(400).json({ mensaje: 'Error al actualizar la galería', error });

  }

};
 
// Eliminar

const eliminarGaleria = async (req, res) => {

  try {

    const eliminada = await Galeria.findByIdAndDelete(req.params.id);

    if (!eliminada) {

      return res.status(404).json({ mensaje: 'Elemento no encontrado' });

    }

    res.status(200).json({ mensaje: 'Elemento eliminado con éxito' });

  } catch (error) {

    res.status(500).json({ mensaje: 'Error al eliminar', error });

  }

};
 
module.exports = {

  crearGaleria,

  obtenerGaleria,

  obtenerGaleriaPorId,

  actualizarGaleria,

  eliminarGaleria

};

 