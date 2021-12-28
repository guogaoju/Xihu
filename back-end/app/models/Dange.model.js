module.exports = (sequelize, Sequelize) => {
    const Dange = sequelize.define("dange", {
      name: {
        type: Sequelize.STRING
      },
      value: {
        type: Sequelize.DOUBLE ,
      },
    });
    return Dange;
  };