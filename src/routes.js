const router = require("express").Router();

//inserir controllers
const UsuarioController = require("./controllers/UsuarioController");
const PagamentoController = require("./controllers/PagamentoController");

//usuario
router
  .get("/usuario/:id", UsuarioController.getOneUsuario)
  .get("/usuario", UsuarioController.getAllUsuario)
  .post("/usuario", UsuarioController.createUsuario);

//pagamento
router
  .get("/listapagamento", PagamentoController.getAllPagamento) // a fazer: pagastes only
  .get("/pagamento/:id", PagamentoController.getOnePagamento)
  .post("/pagamento", PagamentoController.createPagamento);
//nao tem update e nem delete porque nao ha como atualizar um pagamento e nem deletar um pagamento

module.exports = router;
