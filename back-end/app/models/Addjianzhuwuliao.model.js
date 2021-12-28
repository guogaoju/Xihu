module.exports = (sequelize, Sequelize) => {
    const Addjianzhuwuliao = sequelize.define("Addjianzhuwuliao", {
      // supplier_name: {
      //   type: Sequelize.STRING
      // },
      item_name: {
            type: Sequelize.STRING
          },
          wuliaoname: {
            type: Sequelize.STRING
          },
          danwei: {
            type: Sequelize.STRING
          },
          need: {
            type: Sequelize.INTEGER
          },
          Supplied: {
            type: Sequelize.INTEGER
          },
          Supplieds: {
            type: Sequelize.INTEGER
          },
        }
        );
    return Addjianzhuwuliao;
  };