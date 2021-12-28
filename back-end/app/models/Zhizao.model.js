module.exports = (sequelize, Sequelize) => {
    const Zhizao = sequelize.define("zhizao", {
          code: {
            type: Sequelize.STRING
          },
          qiye_name: {
            type: Sequelize.STRING
          },
          item_name: {
            type: Sequelize.STRING
          },
          time: {
            type: Sequelize.DATEONLY
          },
          jindu: {
            type: Sequelize.STRING
          },
          item_money: {
            type: Sequelize.STRING
          },
          total_quota: {
            type: Sequelize.STRING
          },
          money: {
            type: Sequelize.STRING
          },
          interest: {
            type: Sequelize.STRING
          },
          Return: {
            type: Sequelize.STRING
          },
          huan_money: {
            type: Sequelize.STRING
          },
          fax: {
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
    return Zhizao;
  };