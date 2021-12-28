module.exports = (sequelize, Sequelize) => {
    const RongziB = sequelize.define("rongziB", {
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
    return RongziB;
  };