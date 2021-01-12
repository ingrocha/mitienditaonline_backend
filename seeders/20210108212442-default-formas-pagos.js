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
    return await queryInterface.bulkInsert("formaspago", [
      {
        descripcion: "EFECTIVO",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        descripcion: "TARJETA",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        descripcion: "VALES",
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
    // await queryInterface.bulkDelete("superUsuarios", { usuario: "crocha" }, {});
  },
};
