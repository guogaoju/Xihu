module.exports = (sequelize, Sequelize) => {
    const Cailiaogys = sequelize.define("cailiaogys", {
            code: {
              type: Sequelize.STRING
            },
          supplier_name: {
            type: Sequelize.STRING
          },
          trade: {
            type: Sequelize.STRING
          },
          address: {
            type: Sequelize.STRING
          },
          contact_person: {
            type: Sequelize.STRING
          },
          phone: {
            type: Sequelize.STRING
          },
          fax: {
            type: Sequelize.STRING
          },
          post_code: {
            type: Sequelize.STRING
          },
          juridical_person: {
            type: Sequelize.STRING
          },
          bank_name: {
            type: Sequelize.STRING
          },
          bank_card: {
            type: Sequelize.STRING
          },
          tax_card: {
            type: Sequelize.STRING
          },
          vat: {
            type: Sequelize.STRING
          },
          supplier_type: {
            type: Sequelize.STRING
          },
          discount: {
            type: Sequelize.STRING
          },
          registered_trademark: {
            type: Sequelize.STRING
          },
          business_license: {
            type: Sequelize.STRING
          },
          remarks: {
            type: Sequelize.STRING
          },
          grade: {
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
    return Cailiaogys;
  };