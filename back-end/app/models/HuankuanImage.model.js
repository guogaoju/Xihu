module.exports = (sequelize, DataTypes) => {
    const HuankuanImage = sequelize.define("huankuanimage", {
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
    return HuankuanImage;
  };