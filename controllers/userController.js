const User = require("../models/User");

const habilitarUsuario = async (req, res) => {
  try {
    const { id } = req.params;

    const usuario = await User.findById(id);

    if (!usuario) {
      return res.status(404).json({ mensaje: "Usuario no encontrado" });
    }

    usuario.estado = "habilitado";
    await usuario.save();

    res.json({
      mensaje: "Usuario habilitado correctamente",
      usuario
    });

  } catch (error) {
    res.status(500).json({
      mensaje: "Error al habilitar usuario",
      error: error.message
    });
  }
};

module.exports = {
  habilitarUsuario
};