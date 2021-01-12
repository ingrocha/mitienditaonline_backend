module.exports = (app) => {
  const catalogoarticulos = require("../controllers/catalogoarticulos.controller.js");
  var mdAutentificacion = require("../middlewares/autenticacion.middlewares");

  var router = require("express").Router();

  // Retrieve a single Tutorial with id
  router.get(
    "/:codigo",
    mdAutentificacion.verificaToken,
    catalogoarticulos.findOne
  );

  app.use("/api/catalogoarticulos", router);
};
