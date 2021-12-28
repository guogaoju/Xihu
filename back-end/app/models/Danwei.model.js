module.exports = (sequelize, Sequelize) => {
    const Danwei = sequelize.define("danwei", {
      code: {
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      },
      type: {
        type: Sequelize.STRING
      },
      remarks: {
        type: Sequelize.STRING
      },
      current_process: {
        type: Sequelize.STRING
      },
    },{
      sequelize,
      paranoid: true,
      // If you want to give a custom name to the deletedAt column
      deletedAt: 'destroyTime'
    });
    return Danwei;
  };