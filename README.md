# pagastes
Criação de uma API de pagamentos utilizando node.js e express
Com a pagastes, você pode efetuar pagamentos sem sair da sua casa (e com as menores taxas do mercado)
Foi usado no projeto 
⦁	Express.js
⦁	Sequelize
⦁	SQLite

Como iniciar a API no computador local
⦁	Primeiramente, é preciso ter certeza que já estamos no repositório desejado Após isso, e considerando que o GIT já tenha sido instalado:
⦁	Crie uma pasta em "documentos" com o nome de "pagastes"

Agora, daremos os seguintes comandos para o git
⦁	git clone //endereçoRepositorio << faz o download de todos os arquivos do repositório para o computador 
⦁	cd pagastes
Preparando o ambiente para execução
Ainda no Terminal ou no PowerShell
⦁	npm install << instala todas as dependencias

Não esqueça de instalar o postman ou o insomnia (nesse caso, usamos o postman)

Para executar o "pagastes", vamos seguir os seguintes passos:
⦁	Digitar no Terminal ou no PowerShell "npm start" 

No postman as requests e responses vão parecer com os modelos abaixo: 
Rotas do Usuário
POST pagastes.com/usuario/ - Cria um unico usuario
Body do request esperado: 

{
    "nome": "Morgana",
    "documento": "11111111",
    "email": "eu@mail.com",
    "tipo": "PESSOA_FISICA"
}
Body do response esperado
{
    "id": 1,
    "nome": "Morgana",
    "documento": "11111111",
    "email": "eu@mail.com",
    "tipo": "PESSOA_FISICA",
    "saldo": 0,
    "updatedAt": "2021-08-09T06:51:48.881Z",
    "createdAt": "2021-08-09T06:51:48.881Z"
}

GET pagastes.com/usuario - Todos os usuarios
Body do Request esperado
	Não tem body esperado para o request
Body do Response esperado
[
    {
        "id": 1,
        "nome": "Morgana",
        "documento": "11111111",
        "email": "eu@mail.com",
        "tipo": "PESSOA_FISICA",
        "saldo": 0,
        "createdAt": "2021-08-09T06:51:48.881Z",
        "updatedAt": "2021-08-09T06:51:48.881Z"
    },
    {
        "id": 2,
        "nome": "Alice",
        "documento": "22222222",
        "email": "outroe@mail.com",
        "tipo": "PESSOA_FISICA",
        "saldo": 1000000,
        "createdAt": "2021-08-09T06:54:18.786Z",
        "updatedAt": "2021-08-09T06:54:18.786Z"
    }
]

GET pagastes.com/usuario/:id - Cria um novo usuario
Não é necessário um body, apenas uma id informada na rota 

Response esperado

{
    "id": 1,
    "nome": "Morgana",
    "documento": "11111111",
    "email": "eu@mail.com",
    "tipo": "PESSOA_FISICA",
    "saldo": 0,
    "createdAt": "2021-08-09T06:51:48.881Z",
    "updatedAt": "2021-08-09T06:51:48.881Z"
}

Rotas de pagamento 

GET pagastes.com/listapagamento - Todos os pagamentos
Não é esperado um body, apenas a seguinte request
[
    {
        "id": 1,
        "valor": 450,
        "usuarioOrigem": 2,
        "usuarioDestino": 3,
        "autenticacao": "Autorizado",
        "mensagem": "De Alice para Morgana com carinho",
        "createdAt": "2021-08-09T07:03:06.587Z",
        "updatedAt": "2021-08-09T07:03:06.587Z"
    },
    {
        "id": 2,
        "valor": 50,
        "usuarioOrigem": 2,
        "usuarioDestino": 3,
        "autenticacao": "Autorizado",
        "mensagem": "Pra completar seu pedido, Morgana",
        "createdAt": "2021-08-09T07:05:49.511Z",
        "updatedAt": "2021-08-09T07:05:49.511Z"
    },
    {
        "id": 3,
        "valor": 500,
        "usuarioOrigem": 3,
        "usuarioDestino": 1,
        "autenticacao": "Autorizado",
        "mensagem": "Agora vai :)",
        "createdAt": "2021-08-09T07:06:31.804Z",
        "updatedAt": "2021-08-09T07:06:31.804Z"
    }
]
GET pagastes.com/pagamento/:id -  Pagamento especifico
O que é esperado no body
{
    "valor": 450.00,
    "usuarioOrigemId": 2,
    "usuarioDestinoId": 3,
    "mensagem": "De Alice para Morgana com carinho"
}

O que é esperado no request
{
    "id": 1,
    "valor": 450,
    "usuarioOrigem": 2,
    "usuarioDestino": 3,
    "autenticacao": "Autorizado",
    "mensagem": "De Alice para Morgana com carinho",
    "updatedAt": "2021-08-09T07:03:06.587Z",
    "createdAt": "2021-08-09T07:03:06.587Z"
}

POST pagastes.com/pagamento - Novo pagamento 
O que é esperado no body
{
    "valor": 50.00,
    "usuarioOrigemId": 2,
    "usuarioDestinoId": 3,
    "mensagem": "Pra completar seu pedido, Morgana"
}

O que é esperado no request
{
    "id": 2,
    "valor": 50,
    "usuarioOrigem": 2,
    "usuarioDestino": 3,
    "autenticacao": "Autorizado",
    "mensagem": "Pra completar seu pedido, Morgana",
    "updatedAt": "2021-08-09T07:05:49.511Z",
    "createdAt": "2021-08-09T07:05:49.511Z"
}

