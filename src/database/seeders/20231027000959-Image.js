'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Images', [
      {
        file: "1695081779851_products_.jpg",
        productId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        file: "1695081690765_products_.png",
        productId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        file: "1695081856705_products_.png",
        productId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        file: "1695081889180_products_.jpg",
        productId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        file: "1695081889180_products_.jpg",
        productId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        file: "1695081950836_products_.jpg",
        productId: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        file: "1695081975717_products_.jpg",
        productId: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        file: "1695082011009_products_.png",
        productId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        file: "1695082148077_products_.jpg",
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
