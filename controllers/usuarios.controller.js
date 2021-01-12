const db = require("../models");
const bcrypt = require("bcryptjs");
const usuarios = db.usuarios;
const roles = db.roles;
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
exports.create = (req, res) => {
  // Create a Tutorial
  const Usuario = {
    usuario: req.body.usuario,
    password: bcrypt.hashSync(req.body.password, 10),
    nombre: req.body.nombre,
    telefono: req.body.telefono,
    superroles_id: req.body.roles_id,
    fechavenc: req.body.fechavenc,
    activo: req.body.activo,
  };

  usuarios
    .create(Usuario, { usuario: req.usuario })
    .then((data) => {
      data.pass = "";
      res.send({ usuario: data });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.errors || "Sucedio un error al crear!",
      });
    });
};

exports.findAll = (req, res) => {
  usuarios
    .findAll({
      attributes: ["activo", "nombre", "usuario"],
      include: [roles],
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
  usuarios
    .findAll({
      attributes: ["activo", "nombre", "usuario"],
      include: [roles],
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

  usuarios
    .findByPk(id, {
      attributes: ["activo", "nombre", "usuario"],
      include: [roles],
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
  usuarios
    .update(
      req.body,
      {
        where: { id: id },
      },
      { usuario: req.usuario }
    )
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
  usuarios
    .update(
      usuario,
      {
        where: { id: id },
      },
      { usuario: req.usuario }
    )
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

  usuarios
    .destroy(
      {
        where: { id: id },
      },
      { usuario: req.usuario }
    )
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
  usuarios
    .destroy(
      {
        where: {},
        truncate: false,
      },
      { usuario: req.usuario }
    )
    .then((nums) => {
      res.send({ message: `${nums} elementos fueron borrados!` });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Error al borrar los elementos",
      });
    });
};
