const db = require("../models");
const LoginUsuario = db.usuarios;
const RolesUsuario = db.roles;
const LoginSuperUsuario = db.superUsuarios;
const RolesSuperUsuario = db.superRoles;
var bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");
// import * as EmailValidator from "email-validator";
const EmailValidator = require("email-validator");
const fs = require("fs");
const privateKEY = fs.readFileSync("private.key", "utf8");

// SIGNING OPTIONS
var signOptions = {
  expiresIn: "4h",
  algorithm: "RS256",
};

// Retrieve all Tutorials from the database.
exports.renuevatoken = (req, res) => {
  var token = jwt.sign({ usuario: req.usuario }, privateKEY, signOptions);

  res.status(200).send({
    ok: true,
    token,
  });
};

exports.login = (req, res) => {
  // console.log(req.body);

  if (EmailValidator.validate(req.body.usuario)) {
    LoginSuperUsuario.findOne({
      where: { usuario: req.body.usuario, activo: 1 },
      include: [RolesSuperUsuario],
    })
      .then((data) => {
        if (!data) {
          res.status(400).send({
            ok: false,
            message: "Credenciales incorrectas",
            error: { message: "Credenciales incorrectas" },
          });
        } else if (!bcrypt.compareSync(req.body.pass, data.pass)) {
          res.status(400).send({
            ok: false,
            message: "Credenciales incorrectas",
            error: { message: "Credenciales incorrectas" },
          });
        }
        data.pass = "";
        var token = jwt.sign({ usuario: data }, privateKEY, signOptions);
        res.send({
          usuario: data,
          token,
          id: data.id,
        });
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || "Some error occurred in login.",
        });
      });
  } else {
    LoginUsuario.findOne({
      where: { usuario: req.body.usuario, activo: 1 },
      include: [RolesUsuario],
    })
      .then((data) => {
        // console.log(bcrypt.compareSync(req.body.pass, data.pass));
        if (!data) {
          res.status(400).send({
            ok: false,
            message: "Credenciales incorrectas",
            error: { message: "Credenciales incorrectas" },
          });
        } else if (!bcrypt.compareSync(req.body.pass, data.pass)) {
          res.status(400).send({
            ok: false,
            message: "Credenciales incorrectas",
            error: { message: "Credenciales incorrectas" },
          });
        }
        data.pass = "";

        var token = jwt.sign({ usuario: data }, privateKEY, signOptions);
        res.send({
          usuario: data,
          token,
          id: data.id,
        });
        // res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || "Some error occurred in login.",
        });
      });
  }
};
