'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Products',
      [
        {
          name: "Alfajor Ceral",
          price: 500,
          discount: 0,
          description: "Alfajor Ceral 40gr",
          brandId: 1,
          categoryId: 1,
          sectionId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Ades de almendra",
          price: 1000,
          discount: 0,
          description: "Ades de 1lt sabor almendra",
          brandId: 2,
          categoryId: 1,
          sectionId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Alfajor Sin Culpa",
          price: 450,
          discount: 0,
          description: "Alfajor de frutilla Sin culpa",
          brandId: 1,
          categoryId: 1,
          sectionId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Alfajor Vegano",
          price: 550,
          discount: 0,
          description: "Alfajor vegano 60gr",
          brandId: 1,
          categoryId: 1,
          sectionId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Te Boldo",
          price: 550,
          discount: 0,
          description: "Te Boldo marca taragui",
          brandId: 1,
          categoryId: 1,
          sectionId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Choco Arroz",
          price: 500,
          discount: 10,
          description: "Alfajor choco arroz sabor chocolate",
          brandId: 1,
          categoryId: 1,
          sectionId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Te infusiones",
          price: 450,
          discount: 0,
          description: "Te de infusiones de varios sabores",
          brandId: 1,
          categoryId: 1,
          sectionId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Pancake dieteticos",
          price: 650,
          discount: 0,
          description: "Pancake de varios sabores listo para disfrutar",
          brandId: 1,
          categoryId: 1,
          sectionId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Pasas de uva",
          price: 750,
          discount: 0,
          description: "Pasas de uva",
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