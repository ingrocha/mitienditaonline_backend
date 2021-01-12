/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "articulos",
    {
      id: {
        type: DataTypes.INTEGER(20).UNSIGNED,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      departamentos_id: {
        type: DataTypes.INTEGER(20).UNSIGNED,
        allowNull: false,
      },
      sucursales_id: {
        type: DataTypes.INTEGER(20).UNSIGNED,
        allowNull: false,
      },
      unidadmedidas_id: {
        type: DataTypes.INTEGER(20).UNSIGNED,
        allowNull: false,
      },
      usuarios_id: {
        type: DataTypes.INTEGER(20).UNSIGNED,
        allowNull: false,
      },
      codigo: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      nombre: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      inventario: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      visible: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      cantidad: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      precio_compra: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
      },
      precio_venta: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
      },
      impuestos: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      codigosat: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      umedidaSAT: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    {
      tableName: "articulos",
    }
  );
};
