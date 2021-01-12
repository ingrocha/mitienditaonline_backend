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
    return await queryInterface.bulkInsert("superUsuarios", [
      {
        nombre: "Carlos Manuel Rocha Ruiz",
        usuario: "ing_rocha@hotmail.com",
        password:
          "$2a$10$FhGCMmj2eM25quAGv6o/qesJPnVnrlFIfMK9ANeJ04WuZURMKLg6.",
        superroles_id: 1,
        suscripciones_id: 1,
        activo: 1,
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
    await queryInterface.bulkDelete("superUsuarios", { usuario: "crocha" }, {});
  },
};
