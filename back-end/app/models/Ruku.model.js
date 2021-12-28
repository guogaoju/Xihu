module.exports = (sequelize, Sequelize) => {
    const Ruku = sequelize.define("ruku", {
      code: {
        type: Sequelize.STRING
      },
        item_name: {
            type: Sequelize.STRING
          },
          supplier: {
            type: Sequelize.STRING
          },
          goods_name: {
            type: Sequelize.STRING
          },
          goods_danwei: {
            type: Sequelize.STRING
          },
          ruku_number: {
            type: Sequelize.STRING
          },
          before_stock: {
            type: Sequelize.STRING
          },
          after_stock: {
            type: Sequelize.STRING
          },
          before_supply: {
            type: Sequelize.STRING
          },
          after_supply: {
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
    return Ruku;
  };