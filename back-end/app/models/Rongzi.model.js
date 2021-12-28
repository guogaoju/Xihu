module.exports = (sequelize, Sequelize) => {
    const Rongzi = sequelize.define("Rongzi", {
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
    return Rongzi;
  };