const express = require("express");
const app = express();
const APP_PORT = 3000;
const APP_NAME = "Pagastes";
const rotas = require("./routes");
const db = require("../db");

//,routes, sincronizar o db, app listen
app.use(express.json(), express.urlencoded({ extended: true }), rotas);
db.sync()
  .then(() => console.log("Banco sincronizado e pronto para uso"))
  .catch((e) => console.log(e));

app.listen(APP_PORT, () => {
  console.log(`A ${APP_NAME} está pronta`);
});
