module.exports = (sequelize, Sequelize) => {
    const Fukuanwuliao = sequelize.define("Fukuanwuliao", {
    //   id: {
    //     type: Sequelize.INTEGER,
    //     primaryKey: true
    //   },
      wuliaotype: {
        type: Sequelize.STRING
      },
      danwei: {
        type: Sequelize.STRING
      },
      shenqing: {
        type: Sequelize.INTEGER
      },
      price:{
        type: Sequelize.INTEGER,
      },
      yugutatol:{
        type: Sequelize.STRING,
      },
      shijitatol:{
        type: Sequelize.STRING,
      },
      rate:{
        type: Sequelize.INTEGER,
      },
      supplier_name: {
        type: Sequelize.STRING
      },
    });
    // {timestamps: false}
    return Fukuanwuliao;
  };