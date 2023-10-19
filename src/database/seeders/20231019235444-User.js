'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users',
    [
      {
        name: "Tomas",
        surname: "Soliz",
        email: "tomassoliz07@gmail.com",
        password: "$2a$10$RcxF0s8rns7CSKuJ8As6yukoliGdFoUHI8EmhSDbHeXScZxt6Fh5q",
        birthday:"",
        about:"",
        avatar: "img-default.jpg",
        rolId: 1,
        addressId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),

      },
      {
        name: "Gaston",
        surname: "Cane",
        email: "gastoncane@gmail.com",
        password: "$2a$10$NKA2vjYjqzeXRC58hKtcR.kKByuRDMiMrv2A5hvrN8LecivnvO4XC",
        birthday:"",
        about:"",
        avatar: "img-default.jpg",
        rolId: 2,
        addressId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ],
   {})
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
