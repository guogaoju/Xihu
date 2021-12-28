module.exports = (sequelize, Sequelize) => {
    const QiyePingji = sequelize.define("qiyepingji", {
          code: {
            type: Sequelize.STRING
          },
          qiye_name: {
            type: Sequelize.STRING
          },
          trade: {
            type: Sequelize.STRING
          },
          year: {
            type: Sequelize.STRING
          },
          quarter: {
            type: Sequelize.STRING
          },
          score1: {
            type: Sequelize.STRING
          },
          score2: {
            type: Sequelize.INTEGER
          },
          score3: {
            type: Sequelize.INTEGER
          },
          score4: {
            type: Sequelize.INTEGER
          },
          score5: {
            type: Sequelize.INTEGER
          },
          score6: {
            type: Sequelize.INTEGER
          },
          score7: {
            type: Sequelize.INTEGER
          },
          score8: {
            type: Sequelize.INTEGER
          },
          score9: {
            type:Sequelize.INTEGER
          },
          quantify_points: {
            type: Sequelize.INTEGER
          },
          qualitative_points: {
            type: Sequelize.INTEGER
          },
          total_points: {
            type: Sequelize.INTEGER
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
    return QiyePingji;
  };