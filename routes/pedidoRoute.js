const express= require('express');
const router= express.Router();

const controller = require('../controllers/pedidoController');

router.get('/', controller.getAllPedidoItems)
router.post('/', controller.createPedidoList)
router.delete('/:id', controller.deletePedidoItems)
router.get('/:id', controller.getPedidoById)

module.exports =router;