module.exports = (sequelize, Sequelize) => {
    const Addwuliao = sequelize.define("addwuliao", {
      supplier_name: {
        type: Sequelize.STRING
      },
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
        });
    return Addwuliao;
  };