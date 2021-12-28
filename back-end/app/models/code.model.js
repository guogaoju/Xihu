module.exports = (sequelize, Sequelize) => {
    const Code = sequelize.define("code", {
        name: {
            type: Sequelize.STRING
          },
        code_name: {
            type: Sequelize.STRING
          },
         sum: {
            type: Sequelize.INTEGER,
          },
        },);
    return Code;
  };