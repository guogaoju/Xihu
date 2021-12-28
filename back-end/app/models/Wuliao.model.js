module.exports = (sequelize, Sequelize) => {
    const Wuliao = sequelize.define("wuliao", {
      code: {
        type: Sequelize.STRING
      },
      name: {
            type: Sequelize.STRING
          },
          Specification: {
            type: Sequelize.STRING
          },
          wuliaotype: {
            type: Sequelize.STRING
          },
          danwei: {
            type: Sequelize.STRING
          },
          avatar: {
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
    return Wuliao;
  };