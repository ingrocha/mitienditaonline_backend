"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    return await queryInterface.bulkInsert("suscripciones", [
      {
        nombre: "SUPER ADMINITRADOR",
        precio: "0.00",
        limites: "{}",
        activo: 1,
        meses: 0,
        anual: 0,
        administrador: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre: "BASICO",
        precio: "199.00",
        limites:
          "{USUARIOS:2,SUCURSALES:1,ONLINE:0,COMPRAS:0,TRANSFERENCIA:0,PROVEEDORES:0}",
        activo: 1,
        meses: 1,
        anual: 0,
        administrador: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre: "INTERMEDIO",
        precio: "399.00",
        limites:
          "{USUARIOS:5,SUCURSALES:2,ONLINE:1,COMPRAS:1,TRANSFERENCIA:1,PROVEEDORES:1}",
        activo: 1,
        meses: 1,
        anual: 0,
        administrador: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre: "AVANZADO",
        precio: "799.00",
        limites:
          "{SUCURSALES:3,ONLINE:1,ONLINE:1,COMPRAS:1,TRANSFERENCIA:1,PROVEEDORES:1}",
        activo: 1,
        meses: 1,
        anual: 0,
        administrador: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre: "BASICO ANUAL",
        precio: "1990.00",
        limites:
          "{USUARIOS:2,SUCURSALES:1,ONLINE:0,COMPRAS:0,TRANSFERENCIA:0,PROVEEDORES:0}",
        activo: 1,
        meses: 0,
        anual: 1,
        administrador: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre: "INTERMEDIO ANUAL",
        precio: "3990.00",
        limites:
          "{USUARIOS:5,SUCURSALES:2,ONLINE:1,COMPRAS:1,TRANSFERENCIA:1,PROVEEDORES:1}",
        activo: 1,
        meses: 0,
        anual: 1,
        administrador: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre: "AVANZADO ANUAL",
        precio: "7990.00",
        limites:
          "{SUCURSALES:3,ONLINE:1,ONLINE:1,COMPRAS:1,TRANSFERENCIA:1,PROVEEDORES:1}",
        activo: 1,
        meses: 0,
        anual: 1,
        administrador: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    // await queryInterface.bulkDelete("suscripciones", { usuario: "crocha" }, {});
  },
};
