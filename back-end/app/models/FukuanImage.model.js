module.exports = (sequelize, DataTypes) => {
    const FukuanImage = sequelize.define("fukuanimage", {
      name: {
        type: DataTypes.STRING,
      },
      // logid:{
      //   type: DataTypes.INTEGER,
      // },
      path:{
        type: DataTypes.STRING,
      },
      zujianid:{
        type: DataTypes.INTEGER,
      },  
    });
    return FukuanImage;
  };