module.exports = (sequelize, Sequelize) => {
    const operate = sequelize.define("operate", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true
          },
        operate_name: {
            type: Sequelize.STRING
          },
          
        });
    return operate;
  };