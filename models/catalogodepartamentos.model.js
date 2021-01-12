/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "catalogodepartamentos",
    {
      id: {
        type: DataTypes.INTEGER(20).UNSIGNED,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      nombre: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    {
      tableName: "catalogodepartamentos",
      timestamps: false,
      hooks: {
        afterCreate() {},
      },
    }
  );
};
