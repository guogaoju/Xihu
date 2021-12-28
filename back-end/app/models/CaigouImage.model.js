module.exports = (sequelize, DataTypes) => {
    const CaigouImage = sequelize.define("caigouimage", {
      name: {
        type: DataTypes.STRING,
      },
      // logid:{
      //   type: DataTypes.INTEGER,
      // },
      path:{
        type: DataTypes.STRING,
      }, 
    });
    return CaigouImage;
  };