const { includes } = require("lodash");
const db = require("../models");
const comprasarticulos = db.comprasarticulos;
const articulos = db.articulos;

exports.create = (req, res) => {
  // const ComprasArticulo = {
  //   compras_id: req.body.compras_id,
  //   articulos_id: req.body.articulos_id,
  //   descripcion: req.body.descripcion,
  //   cantidad: req.body.cantidad,
  //   preciou: req.body.preciou,
  // };
  const ComprasArticulo = {
    ...req.body,
  };

  comprasarticulos
    .createBulk(ComprasArticulo, { usuario: req.usuario })
    .then((data) => {
      res.send({ comprasarticulo: data });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.errors || "Sucedio un error al crear!",
      });
    });
};

exports.findAll = (req, res) => {
  comprasarticulos
    .findAll([{ include: [articulos] }])
    .then((data) => {
      res.send({ comprasarticulos: data });
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

  comprasarticulos
    .findByPk(id, [{ include: [articulos] }])
    .then((data) => {
      data.pass = "";
      res.send({ comprasarticulo: data });
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
  comprasarticulos
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

  comprasarticulos
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
  const compras_id = req.params.compras_id;
  comprasarticulos
    .destroy({
      where: { compras_id: compras_id },
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
