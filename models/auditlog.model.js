/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "auditLog",
    {
      userId: {
        type: DataTypes.INTEGER(20),
        allowNull: true,
      },
      actionType: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      table: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      prevValues: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      newValues: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    {
      tableName: "auditLog",
      hooks: {
        afterCreate() {},
      },
    }
  );
};
