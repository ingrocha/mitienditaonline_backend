const db = require("../models"),
  AuditLog = db.auditlog;
// const Audiolog = require("../models/auditlog.model");
module.exports.optionsHook = {
  hooks: {
    afterCreate: (instance, options) => {
      saveAuditLog("create", instance, options);
    },
    afterUpdate: (instance, options) => {
      saveAuditLog("update", instance, options);
    },
  },
};
function saveAuditLog(action, model, options) {
  const AuditLine = {
    userId: options.userId,
    actionType: action,
    table: model._modelOptions.name.plural,
    prevValues: JSON.stringify(
      _.pick(model._previousDataValues, model.attributes)
    ),
    newValues: JSON.stringify(_.pick(model.dataValues, model.attributes)),
  };
  AuditLog.create(AuditLine).then((result) => console.log(result));
}
