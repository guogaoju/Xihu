module.exports = (sequelize, Sequelize) => {
    const Dept = sequelize.define("depts", {
      name: {
        type: Sequelize.STRING
      }
        });
    return Dept;
  };