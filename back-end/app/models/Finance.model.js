module.exports = (sequelize, Sequelize) => {
    const Finance = sequelize.define("finance", {
          code: {
            type: Sequelize.STRING
          },
          qiye_name: {
            type: Sequelize.STRING
          },
          year: {
            type: Sequelize.STRING
          },
          quarter: {
            type: Sequelize.STRING
          },
          total_assets: {
            type: Sequelize.STRING
          },
          net_assets: {
            type: Sequelize.STRING
          },
          Loar: {
            type: Sequelize.STRING
          },
          quick_ratio: {
            type: Sequelize.STRING
          },
          current_ratio: {
            type: Sequelize.STRING
          },
          days_inventory: {
            type: Sequelize.STRING
          },
          floating_debt: {
            type: Sequelize.STRING
          },
          rate_margin: {
            type: Sequelize.STRING
          },
          ROE: {
            type: Sequelize.STRING
          },
          accounts_receivable: {
            type: Sequelize.STRING
          },
          accounts_receivableDay: {
            type: Sequelize.STRING
          },
          accounts_payable: {
            type: Sequelize.STRING
          },
          accounts_payableDay: {
            type: Sequelize.STRING
          },
          operating_income: {
            type: Sequelize.STRING
          },
          nonbusiness_income: {
            type: Sequelize.STRING
          },
          net_profits: {
            type: Sequelize.STRING
          },
          total_money: {
            type: Sequelize.STRING
          },
          total_money1: {
            type: Sequelize.STRING
          },
          total_money2: {
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
        });
    return Finance;
  };