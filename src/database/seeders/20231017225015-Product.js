'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Products',
      [
        {
          name: "Alfajor bienva",
          price: 450,
          discount: 0,
          description: "Alfajor blanco Bienva 40gr",
          brandId: 1,
          categoryId: 1,
          sectionId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Pack Bienva x5",
          price: 600,
          discount: 0,
          description: "Pack de alfajor bienva x5",
          brandId: 2,
          categoryId: 1,
          sectionId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Alfajor Happy Food",
          price: 450,
          discount: 0,
          description: "Alfajor de chocolate",
          brandId: 1,
          categoryId: 1,
          sectionId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Alfajor Ceral",
          price: 550,
          discount: 0,
          description: "Alfajor Ceral 100kcal por unidad",
          brandId: 1,
          categoryId: 1,
          sectionId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Alfajor Ceral",
          price: 550,
          discount: 0,
          description: "Alfajor Ceral 100kcal por unidad",
          brandId: 1,
          categoryId: 1,
          sectionId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Alfajor Bienva",
          price: 500,
          discount: 10,
          description: "Alfajor blanco Bienva",
          brandId: 1,
          categoryId: 1,
          sectionId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Alfajor Chocoleit",
          price: 450,
          discount: 0,
          description: "Alfajor Chocoleit 50gr",
          brandId: 1,
          categoryId: 1,
          sectionId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Alfajor Chocoleit",
          price: 650,
          discount: 0,
          description: "Alfajor Chocoleit con extra dulce de leche",
          brandId: 1,
          categoryId: 1,
          sectionId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Ades",
          price: 750,
          discount: 0,
          description: "Ades de almendra sabor vainilla",
          brandId: 1,
          categoryId: 1,
          sectionId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        }
      ],
      {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Products', null, {});
  }
};