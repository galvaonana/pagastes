const Sequelize = require('sequelize');
const caracteristicas = {
    dialect: 'sqlite',
    storage: './PagastesDB.sqlite'
};
const NOME_DB = "PagastesDB";
const USUARIO_DB = "usuario";
const SENHA_DB = "YI56J23Dshplkh";

//criando o banco

const PagastesDB = new Sequelize(NOME_DB,USUARIO_DB,SENHA_DB, caracteristicas);
module.exports = PagastesDB;
