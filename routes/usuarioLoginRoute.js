const express = require("express")

const router = express.Router()

const authController = require("../controllers/usuarioLoginController")

router.post("/", authController.createUsuario)
router.get('/', authController.getAllUsuarios)
router.delete('/:id', authController.deleteUsuario)

module.exports = router