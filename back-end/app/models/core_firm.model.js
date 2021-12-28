module.exports = (sequelize, Sequelize) => {
    const Core_firm = sequelize.define("core_firm", {
          code: {
            type: Sequelize.STRING
          },
          register_name: {
            type: Sequelize.STRING
          },
          credit_code: {
            type: Sequelize.STRING
          },
          trade: {
            type: Sequelize.STRING
          },
          address: {
            type: Sequelize.STRING
          },
          juridical_person: {
            type: Sequelize.STRING
          },
          register_money: {
            type: Sequelize.STRING
          },
          create_time: {
            type: Sequelize.DATEONLY
          },
          business_term: {
            type: Sequelize.STRING
          },
          business_scope: {
            type: Sequelize.STRING
          },
          post_code: {
            type: Sequelize.STRING
          },
          phone: {
            type: Sequelize.STRING
          },
          email: {
            type: Sequelize.STRING
          },
          fax: {
            type: Sequelize.STRING
          },
          account_type: {
            type: Sequelize.STRING
          },
          bank_name: {
            type: Sequelize.STRING
          },
          bank_card: {
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
    return Core_firm;
  };