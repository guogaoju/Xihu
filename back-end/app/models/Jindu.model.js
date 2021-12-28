module.exports = (sequelize, Sequelize) => {
    const Jindu = sequelize.define("jindu", {
          code: {
            type: Sequelize.STRING
          },
          item_name: {
            type: Sequelize.STRING
          },
          address:{
            type: Sequelize.STRING
          },
          introduction:{
            type: Sequelize.STRING
          },
          scale:{
            type: Sequelize.STRING
          },
          before_jindu: {
            type: Sequelize.STRING
          },
          after_jindu: {
            type: Sequelize.STRING
          },
          total_money:{
            type: Sequelize.STRING
          },
          surplus_money:{
            type: Sequelize.STRING
          },
          use_money:{
            type: Sequelize.STRING
          },
          photo: {
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
    return Jindu;
  };