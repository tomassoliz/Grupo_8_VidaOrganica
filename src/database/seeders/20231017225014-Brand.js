'use strict';

const brandJSON = require('../../data/brands.json')
const brands = brandJSON.map(({name, origin}) => {
  return {
    name,
    origin,
    createdAt: new Date(),
    updatedAt: new Date()
  }
})
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Brands', brands, {});

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Brands', null, {});
  }
};