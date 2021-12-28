module.exports = (sequelize, Sequelize) => {
    const HuanKuan = sequelize.define("huankuan", {
          code: {
            type: Sequelize.STRING
          },
          item_name: {
            type: Sequelize.STRING
          },
          total_quota: {
            type: Sequelize.STRING
          },
          money: {
            type: Sequelize.STRING
          },
          huan_money: {
            type: Sequelize.STRING
          },
          huan_money1: {
            type: Sequelize.STRING
          },
          time: {
            type: Sequelize.DATEONLY
          },
          huan_stream: {
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
    return HuanKuan;
  };