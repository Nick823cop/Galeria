const Usuario = require('../models/Usuario');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const loginUsuario = async (req, res) => {
  const { correo, contraseña } = req.body;

  try {
    const usuario = await Usuario.findOne({ correo });

    if (!usuario) {
      return res.status(404).json({ mensaje: 'Usuario no encontrado' });
    }

    const contrasenaValida = await bcrypt.compare(contraseña, usuario.contraseña);
    if (!contrasenaValida) {
      return res.status(401).json({ mensaje: 'Contraseña incorrecta' });
    }

    const token = jwt.sign(
      {
        id: usuario._id,
        rol: usuario.rol
      },
      process.env.JWT_SECRET,
      {
        expiresIn: process.env.JWT_EXPIRES_IN || '1d'
      }
    );

    res.status(200).json({
      mensaje: 'Login exitoso',
      token
    });

  } catch (error) {
    res.status(500).json({ mensaje: 'Error al iniciar sesión', error });
  }
};

module.exports = { loginUsuario };