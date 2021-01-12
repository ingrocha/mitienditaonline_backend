const {
    username,
    password,
    database,
    host,
    dialect,
    pool,
    optionsHook,
  } = require("../config/config"),
  fs = require("fs"),
  path = require("path"),
  basename = path.basename(__filename),
  winston = require("winston"),
  logger = winston.createLogger({
    level: "info",
    format: winston.format.combine(
      winston.format.timestamp(),
      winston.format.prettyPrint()
    ),
    defaultMeta: { service: "Sequilezer" },
    transports: [
      //
      // - Write all logs with level `error` and below to `error.log`
      // - Write all logs with level `info` and below to `combined.log`
      //
      new winston.transports.File({
        filename: "log/error.log",
        level: "error",
      }),
      new winston.transports.File({ filename: "log/combined.log" }),
      // new winston.transports.File({ filename: "debug.log", level: "debug" }),
    ],
    exitOnError: false,
  });
logger.exitOnError = false;
if (process.env.NODE_ENV !== "production") {
  const formatodebug = winston.format.printf(({ message }) => {
    return `${message}`;
  });
  logger.add(
    new winston.transports.Console({
      level: "debug",
      format: formatodebug,
      handleExceptions: true,
    })
  );
}
const Sequelize = require("sequelize");
const sequelize = new Sequelize(database, username, password, {
  host: host,
  dialect: dialect,
  pool: {
    max: pool.max,
    min: pool.min,
    acquire: pool.acquire,
    idle: pool.idle,
  },
  logging: (msg) => logger.debug(msg),
  define: optionsHook,
  // Displays all log function call parameters
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
    );
  })
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize);
    db[model.name] = model;
  });

// console.log(db);
// db.auditLog = require("./auditlog.model")(sequelize, Sequelize);
// db.superUsuarios = require("./superusuario.model")(sequelize, Sequelize);
// db.superRoles = require("./superroles.model")(sequelize, Sequelize);
// db.usuario = require("./usuario.model")(sequelize, Sequelize);
// db.roles = require("./roles.model")(sequelize, Sequelize);
// db.sucursales = require("./sucursales.model")(sequelize, Sequelize);
// db.suscripciones = require("./suscripciones.model")(sequelize, Sequelize);
// db.catalogoarticulos = require("./catalogoarticulos.model")(
//   sequelize,
//   Sequelize
// );
// db.catalogofamilias = require("./catalogofamilias.model")(sequelize, Sequelize);

// db.usuarios = require("./usuarios")(sequelize, Sequelize);
// db.roles = require("./roles")(sequelize, Sequelize);

db.superRoles.hasMany(db.superUsuarios, {
  foreignKey: "superroles_id",
  onDelete: "RESTRICT",
});
db.superUsuarios.belongsTo(db.superRoles, { foreignKey: "superroles_id" });

db.suscripciones.hasMany(db.superUsuarios, {
  foreignKey: "suscripciones_id",
  onDelete: "RESTRICT",
});
db.superUsuarios.belongsTo(db.suscripciones, { foreignKey: "superroles_id" });

db.superUsuarios.hasMany(db.sucursales, {
  foreignKey: "superusuario_id",
  onDelete: "RESTRICT",
});
db.sucursales.belongsTo(db.superUsuarios, { foreignKey: "superusuario_id" });

db.roles.hasMany(db.usuarios, {
  foreignKey: "roles_id",
  onDelete: "RESTRICT",
});
db.usuarios.belongsTo(db.roles, { foreignKey: "roles_id" });

db.superUsuarios.hasMany(db.usuarios, {
  foreignKey: "superusuario_id",
  onDelete: "RESTRICT",
});
db.usuarios.belongsTo(db.superUsuarios, { foreignKey: "superusuario_id" });

// db.sucursales.hasMany(db.unidadmedidas, {
//   foreignKey: "sucursales_id",
//   onDelete: "RESTRICT",
// });
// db.unidadmedidas.belongsTo(db.sucursales, { foreignKey: "sucursales_id" });

db.sucursales.hasMany(db.departamentos, {
  foreignKey: "sucursales_id",
  onDelete: "RESTRICT",
});
db.departamentos.belongsTo(db.sucursales, { foreignKey: "sucursales_id" });

db.sucursales.hasMany(db.impuestos, {
  foreignKey: "sucursales_id",
  onDelete: "RESTRICT",
});
db.impuestos.belongsTo(db.sucursales, { foreignKey: "sucursales_id" });

db.departamentos.hasMany(db.articulos, {
  foreignKey: "departamentos_id",
  onDelete: "RESTRICT",
});
db.articulos.belongsTo(db.departamentos, { foreignKey: "departamentos_id" });

db.sucursales.hasMany(db.articulos, {
  foreignKey: "sucursales_id",
  onDelete: "RESTRICT",
});
db.articulos.belongsTo(db.sucursales, { foreignKey: "sucursales_id" });

db.sucursales.hasMany(db.ventas, {
  foreignKey: "sucursales_id",
  onDelete: "RESTRICT",
});
db.ventas.belongsTo(db.sucursales, { foreignKey: "sucursales_id" });

db.usuarios.hasMany(db.ventas, {
  foreignKey: "usuarios_id",
  onDelete: "RESTRICT",
});
db.ventas.belongsTo(db.usuarios, { foreignKey: "usuarios_id" });

db.usuarios.hasMany(db.articulos, {
  foreignKey: "usuarios_id",
  onDelete: "RESTRICT",
});
db.articulos.belongsTo(db.usuarios, { foreignKey: "usuarios_id" });

db.articulos.hasMany(db.articuloskit, {
  foreignKey: "articulos_id",
  onDelete: "RESTRICT",
});
db.articuloskit.belongsTo(db.articulos, { foreignKey: "articulos_id" });

db.usuarios.hasMany(db.articuloskit, {
  foreignKey: "usuarios_id",
  onDelete: "RESTRICT",
});
db.articuloskit.belongsTo(db.usuarios, { foreignKey: "usuarios_id" });

db.unidadmedidas.hasMany(db.articulos, {
  foreignKey: "unidadmedidas_id",
  onDelete: "RESTRICT",
});
db.articulos.belongsTo(db.unidadmedidas, { foreignKey: "unidadmedidas_id" });

module.exports = db;
