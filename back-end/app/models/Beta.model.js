module.exports = (sequelize, Sequelize) => {
    const Beta = sequelize.define("beta", {
        x: {
        type: Sequelize.STRING
        },
        y: {
            type: Sequelize.DOUBLE  
          },
        s: {
            type: Sequelize.STRING
          },
          
        });
    return Beta;
  };