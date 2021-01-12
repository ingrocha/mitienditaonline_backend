module.exports = (app) => {
  const login = require("../controllers/login.controller.js");
  var mdAutentificacion = require("../middlewares/autenticacion.middlewares");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", login.login);

  // Retrieve all Tutorials
  router.get(
    "/renuevatoken",
    mdAutentificacion.verificaToken,
    login.renuevatoken
  );

  app.use("/api/login", router);
};
