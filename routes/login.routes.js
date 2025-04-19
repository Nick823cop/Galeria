const express = require('express');
const router = express.Router();
const { loginUsuario } = require('../controllers/login.controller');

router.post('/', loginUsuario);

module.exports = router;