'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Images', [
      {
        file: "ades.jpg",
        productId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        file: "alfajor-1.jpg",
        productId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        file: "alfajor-2.png",
        productId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        file: "alfajor-3.png",
        productId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        file: "boldo.png",
        productId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        file: "choco-arroz.png",
        productId: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        file: "infusiones.jpg",
        productId: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        file: "pancake.png",
        productId: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        file: "pasas.png",
        productId: 9,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});

  },

  async down(queryInterface, Sequelize) {


    await queryInterface.bulkDelete('Images', null, {});

  }
};
