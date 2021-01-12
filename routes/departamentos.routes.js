module.exports = (app) => {
  const departamentos = require("../controllers/departamentos.controller.js");
  var mdAutentificacion = require("../middlewares/autenticacion.middlewares");

  var router = require("express").Router();

  router.post("/", mdAutentificacion.verificaToken, departamentos.create);

  router.get("/", mdAutentificacion.verificaToken, departamentos.findAll);

  router.get("/:id", mdAutentificacion.verificaToken, departamentos.findOne);

  router.put("/:id", mdAutentificacion.verificaToken, departamentos.update);

  router.delete("/:id", mdAutentificacion.verificaToken, departamentos.delete);

  router.delete("/", mdAutentificacion.verificaToken, departamentos.deleteAll);

  app.use("/api/departamentos", router);
};
