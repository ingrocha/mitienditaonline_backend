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
    return await queryInterface.bulkInsert("catalogodepartamentos", [
      {
        id: 1,
        nombre: "ABARROTES",
      },
      {
        id: 2,
        nombre: "AROMATIZANTE",
      },
      {
        id: 3,
        nombre: "BEBES",
      },
      {
        id: 4,
        nombre: "BEBIDAS",
      },
      {
        id: 5,
        nombre: "BOLSAS",
      },
      {
        id: 6,
        nombre: "BOTANAS",
      },
      {
        id: 7,
        nombre: "CAFÉ Y TE",
      },
      {
        id: 8,
        nombre: "CALZADO",
      },
      {
        id: 9,
        nombre: "CARNES FRIAS",
      },
      {
        id: 10,
        nombre: "CEREALES",
      },
      {
        id: 11,
        nombre: "CERVEZAS",
      },
      {
        id: 12,
        nombre: "CHILES",
      },
      {
        id: 13,
        nombre: "CHOCOLATES",
      },
      {
        id: 14,
        nombre: "CIGARROS",
      },
      {
        id: 15,
        nombre: "COMIDA CONGELADA",
      },
      {
        id: 16,
        nombre: "COMIDA MASCOTAS",
      },
      {
        id: 17,
        nombre: "CONDIMENTOS",
      },
      {
        id: 18,
        nombre: "CONGELADOS",
      },
      {
        id: 19,
        nombre: "DENTAL",
      },
      {
        id: 20,
        nombre: "DESECHABLES",
      },
      {
        id: 21,
        nombre: "DESODORANTES Y ANTITRANSPIRANTES",
      },
      {
        id: 22,
        nombre: "DETERGENTES",
      },
      {
        id: 23,
        nombre: "DIVERSOS",
      },
      {
        id: 24,
        nombre: "DULCERIA",
      },
      {
        id: 25,
        nombre: "EMBUTIDOS",
      },
      {
        id: 26,
        nombre: "ENCENDEDORES",
      },
      {
        id: 27,
        nombre: "ENLATADOS",
      },
      {
        id: 28,
        nombre: "FARMACIA",
      },
      {
        id: 29,
        nombre: "FIJADOR CABELLO",
      },
      {
        id: 30,
        nombre: "FLANES Y GELATINAS",
      },
      {
        id: 31,
        nombre: "GALLETAS",
      },
      {
        id: 32,
        nombre: "HARINAS",
      },
      {
        id: 33,
        nombre: "HELADO",
      },
      {
        id: 34,
        nombre: "HELADOS",
      },
      {
        id: 35,
        nombre: "HIGIENE FEMENINA",
      },
      {
        id: 36,
        nombre: "HIGIENE PERSONAL",
      },
      {
        id: 37,
        nombre: "HOGAR",
      },
      {
        id: 38,
        nombre: "INSECTICIDA",
      },
      {
        id: 39,
        nombre: "JABONES Y DETERGENTES",
      },
      {
        id: 40,
        nombre: "LACTEOS",
      },
      {
        id: 41,
        nombre: "LEGUMBRES",
      },
      {
        id: 42,
        nombre: "LIMPIADORES",
      },
      {
        id: 43,
        nombre: "LIMPIEZA",
      },
      {
        id: 44,
        nombre: "PAN",
      },
      {
        id: 45,
        nombre: "PANADERIA",
      },
      {
        id: 46,
        nombre: "PAÑALES",
      },
      {
        id: 47,
        nombre: "PAPEL HIGIENICO",
      },
      {
        id: 48,
        nombre: "PAPELERIA",
      },
      {
        id: 49,
        nombre: "PERFUMERIA",
      },
      {
        id: 50,
        nombre: "PILAS",
      },
      {
        id: 51,
        nombre: "PRODUCTOS SANITARIOS",
      },
      {
        id: 52,
        nombre: "QUESOS",
      },
      {
        id: 53,
        nombre: "QUESOS Y EMBUTIDOS",
      },
      {
        id: 54,
        nombre: "REFRESCOS",
      },
      {
        id: 55,
        nombre: "SERVILLETAS",
      },
      {
        id: 56,
        nombre: "SEXUALIDAD",
      },
      {
        id: 57,
        nombre: "SHAMPOO",
      },
      {
        id: 58,
        nombre: "SOPAS",
      },
      {
        id: 59,
        nombre: "SUAVIZANTES",
      },
      {
        id: 60,
        nombre: "SUERO",
      },
      {
        id: 61,
        nombre: "TINTES",
      },
      {
        id: 62,
        nombre: "VARIOS",
      },
      {
        id: 63,
        nombre: "VELADORAS",
      },
      {
        id: 64,
        nombre: "VINOS Y LICORES",
      },
      {
        id: 65,
        nombre: "YOGURT",
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
