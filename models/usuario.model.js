module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "usuarios",
    {
      id: {
        type: DataTypes.INTEGER(20).UNSIGNED,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      roles_id: {
        type: DataTypes.INTEGER(20).UNSIGNED,
        allowNull: false,
      },
      superusuario_id: {
        type: DataTypes.INTEGER(20).UNSIGNED,
        allowNull: false,
      },
      nombre: {
        type: DataTypes.STRING(40),
        allowNull: true,
      },
      usuario: {
        type: DataTypes.TEXT,
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING(64),
        is: /^[0-9a-f]{64}$/i,
        allowNull: false,
      },
      activo: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: "1",
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: true,
      },
    },
    {
      tableName: "usuarios",
    }
  );
};
