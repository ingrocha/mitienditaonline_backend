const db = require("../models");
const catalogodepartamentos = db.catalogodepartamentos;

// Find a single Tutorial with an id
exports.findAll = (req, res) => {
  catalogodepartamentos
    .findAll({
      attributes: ["nombre"],
    })
    .then((data) => {
      res.send({ catalogodepartamento: data });
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error al buscar id=" + id,
      });
    });
};
