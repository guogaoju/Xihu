module.exports = (sequelize, Sequelize) => {
    const CailiaoState = sequelize.define("CailiaoState", {
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
    return CailiaoState;
  };