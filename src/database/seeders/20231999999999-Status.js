'use strict';
const statuses =  [
  {
    name : 'open',
    createdAt : new Date,
    updatedAt : new Date,
  },
  {
    name : 'close',
    createdAt : new Date,
    updatedAt : new Date,
  }
];


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   
      await queryInterface.bulkInsert('Statuses', statuses, {});
    
  },

  async down (queryInterface, Sequelize) {
    
     await queryInterface.bulkDelete('Statuses', null, {});
     
  }
};

