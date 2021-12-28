module.exports = (sequelize, Sequelize) => {
    const Bumen = sequelize.define("bumen", {
        
        name: {
            type: Sequelize.STRING
          },
          username: {
            type: Sequelize.STRING
          },
          dept: {
            type: Sequelize.STRING
          },
        },{
          sequelize,
          paranoid: true,
          // If you want to give a custom name to the deletedAt column
          deletedAt: 'destroyTime'
        });
    return Bumen;
  };