module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "formaspago",
    {
      id: {
        type: DataTypes.INTEGER(20).UNSIGNED,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      descripcion: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    {
      tableName: "formaspago",
    }
  );
};
