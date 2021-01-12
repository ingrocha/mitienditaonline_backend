var jwt = require("jsonwebtoken");
const fs = require("fs");
const publicKEY = fs.readFileSync("public.key", "utf8");
var signOptions = {
  expiresIn: "4h",
  algorithm: "RS256",
};

// ==============================================================================
// Verificar token
// ==============================================================================
exports.verificaToken = function (req, res, next) {
  var token = req.query.token;
  jwt.verify(token, publicKEY, signOptions, (error, decoded) => {
    if (error) {
      // console.log(error);
      return res.status(401).json({
        ok: false,
        message: "Token incorrecto",
        error: error,
      });
    }

    req.usuario = decoded.usuario;
    next();
  });
};
