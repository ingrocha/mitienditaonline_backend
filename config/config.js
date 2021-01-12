const dotenv = require("dotenv");
const _ = require("lodash");
const request = require("request");
dotenv.config();
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/env.config.json")[env];
module.exports = {
  username: config.DBUSER,
  password: config.DBPASSWORD,
  database: config.DB,
  host: config.DBHOST,
  dialect: config.DBDIALECT,
  pool: {
    max: parseInt(config.DBPOOLMAX),
    min: parseInt(config.DBPOOLMIN),
    acquire: parseInt(config.DBPOOLACQUIRE),
    idle: parseInt(config.DBPOOLIDLE),
  },
  BOT_TOKEN: process.env.BOT_TOKEN,
  dev: process.env.DEV,
  optionsHook: {
    hooks: {
      afterCreate(instance, options) {
        saveAuditLog("create", instance, options);
      },
      afterUpdate(instance, options) {
        saveAuditLog("update", instance, options);
      },
      afterDestroy(instance, options) {
        saveAuditLog("delete", instance, options);
      },
    },
  },
};

function saveAuditLog(action, model, options) {
  let instanceContruct = model.constructor.options;
  let pickOptions;
  if (action === "delete") {
    pickOptions = model._options.attributes;
  } else {
    pickOptions = options.fields;
  }

  let AuditLine = {};
  if (options.usuario) {
    AuditLine = {
      json: {
        usuarios_id: options.usuario.id,
        actionType: action,
        table: instanceContruct.tableName,
        prevValues: JSON.stringify(
          _.pick(model._previousDataValues, pickOptions)
        ),
        newValues: JSON.stringify(_.pick(model.dataValues, pickOptions)),
      },
    };
  } else {
    AuditLine = {
      json: {
        actionType: action,
        table: instanceContruct.tableName,
        prevValues: JSON.stringify(
          _.pick(model._previousDataValues, pickOptions)
        ),
        newValues: JSON.stringify(_.pick(model.dataValues, pickOptions)),
      },
    };
  }
  // request.post("http://localhost:8080/api/auditLogs", AuditLine);
  const url = config.URL_SERVIDOR + "api/auditLogs";
  request.post(url, AuditLine);
}
