const db = require("../models");
const catalogoarticulos = db.catalogoarticulos;

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
  const codigo = req.params.codigo;

  catalogoarticulos
    .findOne({ where: { codigo: codigo } })
    .then((data) => {
      data.pass = "";
      res.send({ catalogoarticulo: data });
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error al buscar id=" + id,
      });
    });
};
