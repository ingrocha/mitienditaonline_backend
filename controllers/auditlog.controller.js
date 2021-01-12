const db = require("../models");
const auditLogs = db.auditLog;
// const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
exports.create = (req, res) => {
  const superRol = {
    ...req.body,
  };

  auditLogs
    .create(superRol)
    .then((data) => {
      data.pass = "";
      res.send({ superUsuario: data });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.errors || "Sucedio un error al crear!",
      });
    });
};
