const db = require("../models");
const formaspago = db.formaspago;

exports.create = (req, res) => {
  const Formapago = {
    descripcion: req.body.descripcion,
  };

  formaspago
    .create(Formapago, { usuario: req.usuario })
    .then((data) => {
      res.send({ formapago: data });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.errors || "Sucedio un error al crear!",
      });
    });
};

// Delete all Tutorials from the database.
exports.createAll = (req, res) => {
  familias = JSON.parse(req.body.familias);

  formaspago
    .bulkCreate([familias], { usuario: req.usuario })
    .then((nums) => {
      res.send({ message: `${nums} elementos fueron agregados!` });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Error al agregar los elementos",
      });
    });
};

exports.findAll = (req, res) => {
  formaspago
    .findAll()
    .then((data) => {
      res.send({ formaspago: data });
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

  formaspago
    .findByPk(id)
    .then((data) => {
      data.pass = "";
      res.send({ departamento: data });
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
  formaspago
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

  formaspago
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
  formaspago
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
