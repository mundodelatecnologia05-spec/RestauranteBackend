const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  nombre: String,
  email: String,
  estado: {
    type: String,
    enum: ["habilitado", "deshabilitado"],
    default: "habilitado"
  }
}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);