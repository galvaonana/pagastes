const Usuario = require("../models/UsuarioModel");

class UsuarioController {
  async createUsuario(apiRequest, apiResponse) {
    try {
      const { nome, documento, email, tipo } = apiRequest.body;
      let novoUsuario = {
        nome: nome,
        documento: documento,
        email: email,
        tipo: tipo,
      };

      //adiciona saldo à conta para teste
      if (nome == "Alice") Object.assign(novoUsuario, { saldo: 1000000 });
      else Object.assign(novoUsuario, { saldo: 0 }); //adiciona valor padrão

      await Usuario.create(novoUsuario).then((novoUsuario) =>
        apiResponse.status(201).json(novoUsuario)
      );
    } catch (erro) {
      apiResponse.status(500).send(erro.message);
    }
  }

  async getOneUsuario(apiRequest, apiResponse) {
    const id = apiRequest.params.id;
    try {
      const dados = await Usuario.findByPk(id);
      if (!dados) throw new Error("Usuario nao encontrado");
      apiResponse.json(dados);
    } catch (erro) {
      apiResponse.status(404).send(erro.message);
    }
  }

  async getAllUsuario(apiRequest, apiResponse) {
    try {
      const usuarios = await Usuario.findAll();
      apiResponse.json(usuarios);
    } catch (erro) {
      apiResponse.status(404).send(erro.message);
    }
  }
}

module.exports = new UsuarioController();
