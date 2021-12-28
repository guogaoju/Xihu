module.exports = (sequelize, Sequelize,) => {
    const Fangwen = sequelize.define("fangwen", {
          code: {
            type: Sequelize.STRING
          },
          qiye_name: {
            type: Sequelize.STRING
          },
          visit_type: {
            type: Sequelize.STRING
          },
          visit_time: {
            type: Sequelize.DATEONLY
          },
          contract: {
            type: Sequelize.STRING
          },
          remarks: {
            type: Sequelize.STRING
          },
          current_process: {
            type: Sequelize.STRING
          },
        },{
          sequelize,
          paranoid: true,
          // If you want to give a custom name to the deletedAt column
          deletedAt: 'destroyTime'
        }
        );
    return Fangwen;
  };