module.exports = (sequelize, Sequelize) => {
    const CaiGouwuliao = sequelize.define("caigouwuliao", {
        
      name: {
            type: Sequelize.STRING
          },
          wname: {
            type: Sequelize.STRING
          },
          shu: {
            type: Sequelize.STRING
          },
          unit_price: {
            type: Sequelize.STRING
          },
          unit_totalprice: {
            type: Sequelize.STRING
          },
          supplier: {
            type: Sequelize.STRING
          },
          reality_number: {
            type: Sequelize.STRING
          },
          reality_price: {
            type: Sequelize.STRING
          },
          reality_totalprice: {
            type: Sequelize.STRING
          },
          tax_rate: {
            type: Sequelize.STRING
          },
          tax_rateprice: {
            type: Sequelize.STRING
          },
          tax_ratemoney: {
            type: Sequelize.STRING
          },
          time: {
            type: Sequelize.STRING
          },
        });
    return CaiGouwuliao;
  };