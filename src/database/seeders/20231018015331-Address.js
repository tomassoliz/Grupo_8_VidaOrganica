'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Addresses',
      [
        {
          province: "Buenos Aires",
          city: "Villa Celina",
          address: "La quiaca 2728",
          zipCode: 1772,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          province: "Córdoba",
          city: "Córdoba",
          address: "Avenida feliz 123",
          zipCode: 1500,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          province: "Jujuy",
          city: "jujuy",
          address: "Avenida siempreviva 123",
          zipCode: 1700,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          province: "Entre Rios",
          city: "entre rios",
          address: "La famosa 2223",
          zipCode: 1100,
          createdAt: new Date(),
          updatedAt: new Date(),
        }
      ]
      , {});
  },

  async down (queryInterface, Sequelize) {

     await queryInterface.bulkDelete('Addresses', null, {});
     
  }
};
