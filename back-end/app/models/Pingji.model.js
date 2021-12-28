module.exports = (sequelize, Sequelize) => {
    const Pingji = sequelize.define("pingji", {
          code: {
            type: Sequelize.STRING
          },
          supplier_name: {
            type: Sequelize.STRING
          },
          year: {
            type: Sequelize.STRING
          },
          quarter: {
            type: Sequelize.STRING
          },
          score1:{
            type: Sequelize.STRING
          },
          score2:{
            type: Sequelize.STRING
          },
          score3:{
            type: Sequelize.STRING
          },
          score4:{
            type: Sequelize.STRING
          },
          score5:{
            type: Sequelize.STRING
          },
          quantify_points: {
            type: Sequelize.STRING
          },
          qualitative_points: {
            type: Sequelize.STRING
          },
          total_points: {
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
    return Pingji;
  };