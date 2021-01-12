module.exports = (app) => {
  const auditLogs = require("../controllers/auditlog.controller.js");
  // var mdAutentificacion = require("../middlewares/autenticacion.middlewares");
  var router = require("express").Router();
  // Create a new Tutorial
  router.post("/", auditLogs.create);

  app.use("/api/auditLogs", router);
};
