module.exports = (sequelize, Sequelize) => {
    const Alpha = sequelize.define("alpha", {
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
    return Alpha;
  };