module.exports = (sequelize, Sequelize) => {
    const Addjinduwuliao = sequelize.define("addjinduwuliao", {
        
        name: {
            type: Sequelize.STRING
          },
          wname: {
            type: Sequelize.STRING
          },
        before_stock: {
            type: Sequelize.STRING
          },
          consume: {
            type: Sequelize.STRING
          },
          after_stock: {
            type: Sequelize.STRING
          },
        });
    return Addjinduwuliao;
  };