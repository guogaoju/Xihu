module.exports = (sequelize, Sequelize) => {
    const Kucun = sequelize.define("kucun", {
          code: {
            type: Sequelize.STRING
          },
          item_name: {
            type: Sequelize.STRING
          },
          goods_type: {
            type: Sequelize.STRING
          },
          goods_danwei: {
            type: Sequelize.STRING
          },
          before_stock: {
            type: Sequelize.STRING
          },
          after_stock: {
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
    return Kucun;
  };