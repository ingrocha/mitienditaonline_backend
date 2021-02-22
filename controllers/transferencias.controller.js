const db = require("../models");
const transferencias = db.transferencias;

exports.create = (req, res) => {
  const Transferencia = {
    nombre: req.body.nombre,
    simbolo: req.body.simbolo,
    kit: req.body.kit,
  };

  transferencias
    .create(Transferencia, { usuario: req.usuario })
    .then((data) => {
      res.send({ transferencia: data });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.errors || "Sucedio un error al crear!",
      });
    });
};

exports.findAll = (req, res) => {
  transferencias
    .findAll()
    .then((data) => {
      res.send({ transferencias: data });
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

  transferencias
    .findByPk(id)
    .then((data) => {
      data.pass = "";
      res.send({ unidadmedida: data });
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
  transferencias
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

  transferencias
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
  transferencias
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
