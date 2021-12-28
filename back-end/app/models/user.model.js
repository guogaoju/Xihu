module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("users", {
      name: {
        type: Sequelize.STRING
      },
      username: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      }
    },{
      sequelize,
      paranoid: true,
      // If you want to give a custom name to the deletedAt column
      deletedAt: 'destroyTime'
    });
  
    return User;
  };