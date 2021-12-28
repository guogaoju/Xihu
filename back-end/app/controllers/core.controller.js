const db = require("../models");
const Core_firm = db.core_firm;
const corefirmState = db.corefirmState;
const Op = db.Sequelize.Op;

// 新建controller层
exports.create = (req, res) => {
  // Validate request
  if (!req.body.register_name) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
  const core_firm = {
    code:req.body.code,
    register_name: req.body.register_name,
    credit_code:req.body.credit_code,
    trade: req.body.trade,
    address:req.body.address,
    juridical_person:req.body.juridical_person,
    register_money:req.body.register_money,
    create_time:req.body.create_time,
    business_term:req.body.business_term,
    business_scope:req.body.business_scope,
    post_code:req.body.post_code,
    phone:req.body.phone,
    email:req.body.email,
    fax:req.body.fax,
    account_type:req.body.account_type,
    bank_name:req.body.bank_name,
    bank_card:req.body.bank_card,
    // current_process:req.body.current_process,
  };
// 新增
  Core_firm.create(core_firm)
    .then(core_firm => {
      core_firm.setCorefirmState([1])
      res.send(core_firm);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the core_firm."
      });
    });
};

//从数据库查找所有,模糊查询
exports.findAll = (req, res) => {
    // const title = req.query.title;
    // var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
    Core_firm.findAll({order: [['id', 'ASC']],include : [corefirmState]})
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving core_firm."
        });
      });
};

//根据id查找
exports.findOne = (req, res) => {
    Core_firm.findOne({ where: { id: req.params.id },include : [corefirmState] })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving core_firm with id=" + id
        });
      });
};

//修改
exports.update = (req, res) => {
    const id = req.params.id;
    Core_firm.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "core_firm was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update core_firm with id=${id}. Maybe core_firm was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating core_firm with id=" + id
        });
      });
};

//删除
exports.delete = (req, res) => {
    const id = req.params.id;

    Core_firm.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "core_firm was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete core_firm with id=${id}. Maybe Tutorial was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete core_firm with id=" + id
        });
      });
};

// 删除所有
// exports.deleteAll = (req, res) => {
//   Core_firm.destroy({
//         where: {},
//         truncate: false
//       })
//         .then(nums => {
//           res.send({ message: `${nums} core_firm were deleted successfully!` });
//         })
//         .catch(err => {
//           res.status(500).send({
//             message:
//               err.message || "Some error occurred while removing all core_firm."
//           });
//         });
// };

// Find all published Tutorials
// exports.findAllPublished = (req, res) => {
//   Core_firm.findAll({ where: { published: true } })
//     .then(data => {
//       res.send(data);
//     })
//     .catch(err => {
//       res.status(500).send({
//         message:
//           err.message || "Some error occurred while retrieving tutorials."
//       });
//     });
// };

