module.exports = (sequelize, Sequelize) => {
    const Daiban = sequelize.define("Daiban", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      deptId: {
            type: Sequelize.INTEGER
          },
      name: {
        type: Sequelize.STRING
      },
      link: {
        type: Sequelize.STRING
      },
      sum: {
        type: Sequelize.INTEGER
      },
    });
    return Daiban;
  };