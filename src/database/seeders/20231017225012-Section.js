'use strict';

const sections =  [
  {
    name : 'Visitas',
    createdAt : new Date,
    updatedAt : new Date,
  },
  {
    name : 'Ofertas',
    createdAt : new Date,
    updatedAt : new Date,
  }
];


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   
      await queryInterface.bulkInsert('Sections', sections, {});
    
  },

  async down (queryInterface, Sequelize) {
    
     await queryInterface.bulkDelete('Sections', null, {});
     
  }
};
