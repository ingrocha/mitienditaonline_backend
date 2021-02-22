module.exports = (app) => {
  const formaspago = require("../controllers/formaspago.controller.js");
  var mdAutentificacion = require("../middlewares/autenticacion.middlewares");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", mdAutentificacion.verificaToken, formaspago.create);

  // Retrieve all Tutorials
  router.get("/", mdAutentificacion.verificaToken, formaspago.findAll);

  // Retrieve a single Tutorial with id
  router.get("/:id", mdAutentificacion.verificaToken, formaspago.findOne);

  // Update a Tutorial with id
  router.put("/:id", mdAutentificacion.verificaToken, formaspago.update);

  // Delete a Tutorial with id
  router.delete("/:id", mdAutentificacion.verificaToken, formaspago.delete);

  // Create a new Tutorial
  router.delete("/", mdAutentificacion.verificaToken, formaspago.deleteAll);

  app.use("/api/formaspago", router);
};
