module.exports = (sequelize, Sequelize) => {
    const Jianzhu = sequelize.define("jianzhu", {
          code: {
            type: Sequelize.STRING
          },
          builder: {
            type: Sequelize.STRING
          },
          item_name: {
            type: Sequelize.STRING
          },
          time: {
            type: Sequelize.DATEONLY
          },
          time1: {
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
          money1: {
            type: Sequelize.STRING
          },
          money2: {
            type: Sequelize.STRING
          },
          interest: {
            type: Sequelize.STRING
          },
          interest1: {
            type: Sequelize.STRING
          },
          Return: {
            type: Sequelize.STRING
          },
          fax: {
            type: Sequelize.STRING
          },
          A: {
            type: Sequelize.STRING
          },
          B: {
            type: Sequelize.STRING
          },
          C: {
            type: Sequelize.STRING
          },
          grade: {
            type: Sequelize.STRING
          },
          cause: {
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
    return Jianzhu;
  };