module.exports = (app) => {
  const impuestos = require("../controllers/impuestos.controller.js");
  var mdAutentificacion = require("../middlewares/autenticacion.middlewares");

  var router = require("express").Router();

  router.post("/", mdAutentificacion.verificaToken, impuestos.create);

  router.get("/", mdAutentificacion.verificaToken, impuestos.findAll);

  router.get("/:id", mdAutentificacion.verificaToken, impuestos.findOne);

  router.put("/:id", mdAutentificacion.verificaToken, impuestos.update);

  router.delete("/:id", mdAutentificacion.verificaToken, impuestos.delete);

  router.delete("/", mdAutentificacion.verificaToken, impuestos.deleteAll);

  app.use("/api/impuestos", router);
};
