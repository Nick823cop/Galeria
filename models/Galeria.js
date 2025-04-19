const mongoose = require('mongoose');
 
const galeriaSchema = new mongoose.Schema({
  titulo: {
    type: String,
    required: [true, 'El título es obligatorio']
  },
  descripcion: {
    type: String,
    default: ''
  },
  url: {
    type: String,
    required: [true, 'La URL de la imagen es obligatoria']
  },
  categoria: {
    type: String,
    enum: ['platos', 'eventos', 'local', 'otros'],
    default: 'otros'
  }
}, {
  timestamps: true
});
 
const Galeria = mongoose.model('Galeria', galeriaSchema);
 
module.exports = Galeria;