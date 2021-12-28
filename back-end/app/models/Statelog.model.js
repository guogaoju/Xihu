module.exports = (sequelize, Sequelize) => {
    const Statelog = sequelize.define("Statelog", {
      // userid: {
      //   type: Sequelize.INTEGER
      // },
      // qiyeid: {
      //   type: Sequelize.INTEGER
      // },
      // oldStateid: {
      //   type: Sequelize.INTEGER
      // },
      // newStateid: {
      //   type: Sequelize.INTEGER
      // }
    });
  
    return Statelog;
  };