module.exports = (sequelize, Sequelize) => {
    const XinyongA = sequelize.define("xinyongA", {
        x: {
        type: Sequelize.STRING
        },
        y: {
            type: Sequelize.INTEGER
          },
        s: {
            type: Sequelize.STRING
          },
          
        });
    return XinyongA;
  };