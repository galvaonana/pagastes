const db = require("../../db");
const Sequelize = require("sequelize");

//alguns dos dados são obrigatórios
const Pagamento = db.define("pagamento", {
  valor: {
    type: Sequelize.DOUBLE, //attn
    allownull: false,
  },
  usuarioOrigem: {
    type: Sequelize.NUMBER,
    allowNull: false,
  },
  usuarioDestino: {
    type: Sequelize.NUMBER,
    allowNull: false,
  },
  autenticacao: {
    //attn
    type: Sequelize.STRING,
    allowNull: false,
    //unique: true, seria se fosse real
  },
  mensagem: {
    type: Sequelize.STRING,
    allowNull: true,
  },
});

module.exports = Pagamento;
