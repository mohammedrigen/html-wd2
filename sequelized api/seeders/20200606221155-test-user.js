'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return quertInterface.bulkInsert(
      "Users",
      [
        {
          lastName: "Trump"
          firstName: "Donald"
          email: "DJ@durmp.com",
          address:"DC",
          phoneNumber:"1-800-dont know",
          picture:"/someurl",
          createdAt:"newDate()",
          updatedAt:"newDate()",
        }
        {
          lastName: "Biden"
          firstName: "Joe"
          email: "JB@durmp.com",
          address:"Deleware",
          phoneNumber:"1-800-dont know",
          picture:"/someurl",
          createdAt:"newDate()",
          updatedAt:"newDate()",
        }
      ]
    )
  },

  
};
