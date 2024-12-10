const express= require('express');
const router= express.Router();

const controller = require('../controllers/clienteController');

router.get('/', controller.getAllClientes)
router.post('/', controller.createCliente)
router.put('/:id', controller.updateCliente)
router.delete('/:id', controller.deleteCliente)

module.exports =router;