/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "proveedores",
    {
      id: {
        type: DataTypes.INTEGER(20).UNSIGNED,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      sucursales_id: {
        type: DataTypes.INTEGER(20).UNSIGNED,
        allowNull: false,
      },
      usuarios_id: {
        type: DataTypes.INTEGER(20).UNSIGNED,
        allowNull: true,
      },
      nombre: {
        type: DataTypes.TEXT,
      },
      representante: {
        type: DataTypes.TEXT,
      },
      telefonos: {
        type: DataTypes.TEXT,
      },
      correos: {
        type: DataTypes.TEXT,
      },
      pagina: {
        type: DataTypes.TEXT,
      },
      comentarios: {
        type: DataTypes.TEXT,
      },
    },
    {
      tableName: "proveedores",
    }
  );
};
