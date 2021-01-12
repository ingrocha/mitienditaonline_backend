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
    return await queryInterface.bulkInsert("unidadmedidas", [
      {
        nombre: "PIEZA",
        simbolo: "pza.",
        kit: "0",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre: "KIT",
        simbolo: "kit",
        kit: "1",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre: "KILOGRAMO",
        simbolo: "kg.",
        kit: "0",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre: "GRAMO",
        simbolo: "g.",
        kit: "0",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre: "LITRO",
        simbolo: "l.",
        kit: "0",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre: "MILILITRO",
        simbolo: "ml.",
        kit: "0",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre: "METRO",
        simbolo: "m.",
        kit: "0",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre: "CENTIMETRO",
        simbolo: "cm.",
        kit: "0",
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
  },
};
