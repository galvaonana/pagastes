const Pagamento = require("../models/PagamentoModel");
const Usuario = require("../models/UsuarioModel");
const fetch = require("node-fetch");

class PagamentoController {
  async getOnePagamento(apiRequest, apiResponse) {
    const id = apiRequest.params.id;
    try {
      const dados = await Pagamento.findByPk(id);
      if (!dados) throw new Error("Pagamento nao encontrado");
      apiResponse.json(dados);
    } catch (erro) {
      apiResponse.status(404).send(erro.message);
    }
  }

  async getAllPagamento(apiRequest, apiResponse) {
    try {
      // if (apiRequest.params.codigoPagastes != "codigoDaPagastesXYZ")
      //   throw new Error("Nao autorizado");
      const pagamentos = await Pagamento.findAll();
      apiResponse.json(pagamentos);
    } catch (erro) {
      apiResponse.status(404).send(erro.message);
    }
  }

  async createPagamento(apiRequest, apiResponse) {
    const { valor, usuarioOrigemId, usuarioDestinoId, mensagem } =
      apiRequest.body; //attn
    try {
      const usuarioOrigem = await Usuario.findByPk(usuarioOrigemId);
      const usuarioDestino = await Usuario.findByPk(usuarioDestinoId);

      if (usuarioOrigem.tipo == "LOJISTA") {
        throw new Error("Operacao proibida");
      }
      if (usuarioOrigem.saldo < valor) {
        throw new Error("Saldo insuficiente");
      }

      // script de autorizacao
      // const autorizacao = await fetch(
      //   //attn
      //   "https://run.mocky.io/v3/8fafdd68-a090-496f-8c9a-3442cf30dae6"
      // );
      // if (autorizacao.message != "Autorizado") {
      //   console.log(autorizacao.message);
      //   throw new Error("Não autorizado");
      // }

      let novoPagamento = {
        valor: valor,
        usuarioOrigem: usuarioOrigem.id,
        usuarioDestino: usuarioDestino.id,
        autenticacao: "Autorizado",
        mensagem: mensagem,
      };
      console.log(novoPagamento);

      await Pagamento.create(novoPagamento).then((novoPagamento) => {
        //atualiza o saldo da origem
        let saldoAnteriorOrigem = usuarioOrigem.saldo;
        usuarioOrigem.update({
          saldo: saldoAnteriorOrigem - valor,
        });
        //atualiza o saldo do destino
        let saldoAnteriorDestino = usuarioDestino.saldo;
        usuarioDestino.update({
          saldo: saldoAnteriorDestino + valor,
        });
        //salva as alteracoes nos usuarios
        usuarioOrigem.save();
        usuarioDestino.save();
        apiResponse.status(201).json(novoPagamento);
      });
    } catch (erro) {
      apiResponse.status(500).send(erro.message);
    }
  }
}

module.exports = new PagamentoController();
