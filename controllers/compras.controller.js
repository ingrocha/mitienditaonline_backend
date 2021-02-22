const db = require("../models");
const compras = db.compras;

exports.create = (req, res) => {
  const Compra = {
    sucursales_id: req.body.sucursales_id,
    usuarios_id: req.body.usuarios_id,
    proveedores_id: req.body.proveedores_id,
    total: req.body.total,
  };

  compras
    .create(Compra, { usuario: req.usuario })
    .then((data) => {
      res.send({ compra: data });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.errors || "Sucedio un error al crear!",
      });
    });
};

exports.findAll = (req, res) => {
  compras
    .findAll()
    .then((data) => {
      res.send({ compras: data });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Sucedio un error al obtener!",
      });
    });
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  compras
    .findByPk(id)
    .then((data) => {
      data.pass = "";
      res.send({ compra: data });
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error al buscar id=" + id,
      });
    });
};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;
  // console.log(req.body);
  compras
    .update(req.body, {
      where: { id: id },
      individualHooks: true,
      usuario: req.usuario,
    })
    .then((num) => {
      // console.log(num.length);
      if (num == 1) {
        res.send({
          message: "Se actualizo correctamente.",
        });
      } else {
        res.send({
          message: `No se pudo actualizar id=${id}!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error al actualizar id=" + id,
      });
    });
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  compras
    .destroy({
      where: { id: id },
      individualHooks: true,
      usuario: req.usuario,
    })
    .then((num) => {
      console.log(num);
      if (num == 1) {
        res.send({
          message: "Fue borrado correctamente!",
        });
      } else {
        res.send({
          message: `No se pudo borrar id=${id}!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error al borra id=" + id,
      });
    });
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
  compras
    .destroy({
      where: {},
      truncate: false,
      usuario: req.usuario,
    })
    .then((nums) => {
      res.send({ message: `${nums} elementos fueron borrados!` });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Error al borrar los elementos",
      });
    });
};
