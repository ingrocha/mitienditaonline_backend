const db = require("../models");
const bcrypt = require("bcryptjs");
const superUsuarios = db.superUsuarios;
const superroles = db.superroles;
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
exports.create = (req, res) => {
  // Create a Tutorial
  const superUsuario = {
    usuario: req.body.usuario,
    password: bcrypt.hashSync(req.body.password, 10),
    nombre: req.body.nombre,
    telefono: req.body.telefono,
    superroles_id: req.body.roles_id,
    fechavenc: req.body.fechavenc,
    activo: req.body.activo,
  };

  superUsuarios
    .create(superUsuario, { usuario: req.usuario })
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

exports.findAll = (req, res) => {
  superUsuarios
    .findAll({
      attributes: ["activo", "nombre", "usuario", "fechavenc"],
      include: [superroles],
    })
    .then((data) => {
      res.send({ usuarios: data });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Sucedio un error al obtener!",
      });
    });
};

// Retrieve all Tutorials from the database.
exports.findAllActivos = (req, res) => {
  superUsuarios
    .findAll({
      attributes: ["activo", "nombre", "usuario", "fechavenc"],
      include: [superroles],
      where: { activo: 1 },
    })
    .then((data) => {
      res.send({ usuarios: data });
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

  superUsuarios
    .findByPk(id, {
      attributes: ["activo", "nombre", "usuario", "fechavenc"],
      include: [superroles],
    })
    .then((data) => {
      data.pass = "";
      res.send({ usuario: data });
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
  superUsuarios
    .update(req.body, {
      where: { id: id },
      usuario: req.usuario,
    })
    .then((num) => {
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

// Update a Tutorial by the id in the request
exports.updatePassword = (req, res) => {
  const id = req.params.id;
  const usuario = {
    pass: bcrypt.hashSync(req.body.pass, 10),
  };
  superUsuarios
    .update(usuario, {
      where: { id: id },
      usuario: req.usuario,
    })
    .then((num) => {
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

  superUsuarios
    .destroy({
      where: { id: id },
      usuario: req.usuario,
    })
    .then((num) => {
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
  superUsuarios
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
