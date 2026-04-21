const express = require("express");
const router = express.Router();

const { habilitarUsuario } = require("../controllers/userController");


router.patch("/:id/habilitar", habilitarUsuario);

module.exports = router;