module.exports = (sequelize, Sequelize) => {
    const FukuanState = sequelize.define("FukuanState", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      nodeName: {
        type: Sequelize.STRING
      },
      nodebutton: {
        type: Sequelize.STRING
      },
      nextStateid: {
        type: Sequelize.INTEGER
      },
      lastone:{
        type: Sequelize.INTEGER,
      },display:{
        type: Sequelize.INTEGER,
      }
      
    },{timestamps: false});
    return FukuanState;
  };