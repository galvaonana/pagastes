const db = require("../../db");
const Sequelize = require("sequelize");

const Usuario = db.define("usuario", {
  nome: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  documento: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true, //attn
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true, //attn
  },
  tipo: {
    //"LOJISTA" ou "PESSOA_FISICA"
    type: Sequelize.STRING,
    allowNull: false,
  },
  saldo: {
    type: Sequelize.DOUBLE,
    allowNull: false,
  },
});
module.exports = Usuario;
