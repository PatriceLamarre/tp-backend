const express= require('express');
const router= express.Router();

const controller = require('../controllers/proveedorController');

router.get('/', controller.getAllProveedores)
router.post('/', controller.createProveedor)
router.put('/:id', controller.updateProveedor)
router.delete('/:id', controller.deleteProveedor)
router.get('/:id', controller.getProveedorById)

module.exports =router;