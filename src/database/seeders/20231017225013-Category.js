'use strict';
const categoriesJSON = require('../../data/categories.json')
const categories = categoriesJSON.map(({name}) => {
  return {
    name,
    createdAt: new Date(),
    updatedAt: new Date()
  }
})
console.log("cialasdas", categories);
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Categories', categories, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Categories', null, {});
  }
};
