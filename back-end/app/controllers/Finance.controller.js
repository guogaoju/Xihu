const db = require("../models");
const Finance = db.finance;
const FinanceState = db.FinanceState;
const Op = db.Sequelize.Op;

// 新建controller层
exports.create = (req, res) => {
  // Validate request
  if (!req.body.qiye_name) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
  const finance = {
            code:req.body.code,
            qiye_name: req.body.qiye_name,
            year: req.body.year,
            quarter: req.body.quarter,
            total_assets:req.body.total_assets,
            net_assets:req.body.net_assets,
            Loar:req.body.Loar,
            quick_ratio:req.body.quick_ratio,
            current_ratio:req.body.current_ratio,
            days_inventory:req.body.days_inventory,
            floating_debt:req.body.floating_debt,
            rate_margin:req.body.rate_margin,
            ROE:req.body.ROE,
            accounts_receivable:req.body.accounts_receivable,
            accounts_receivableDay:req.body.accounts_receivableDay,
            accounts_payable:req.body.accounts_payable,
            accounts_payableDay:req.body.accounts_payableDay,
            operating_income:req.body.operating_income,
            nonbusiness_income:req.body.nonbusiness_income,
            net_profits:req.body.net_profits,
            total_money:req.body.total_money,
            total_money1:req.body.total_money1,
            total_money2:req.body.total_money2,
            // current_process:req.body.current_process
  };

// 新增
  Finance.create(finance)
    .then(finance => {
      finance.setFinanceState([1])
      res.send(finance);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Finance."
      });
    });
};

//从数据库查找所有,模糊查询
exports.findAll = (req, res) => {
    // const title = req.query.title;
    // var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
    Finance.findAll({order: [['id', 'ASC']],include : [FinanceState]})
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Finance."
        });
      });
};


//根据id查找
exports.findOne = (req, res) => {
    Finance.findOne({where: { id: req.params.id },include : [FinanceState] })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Finance with id=" + id
        });
      });
};

//修改
exports.update = (req, res) => {
    const id = req.params.id;
    Finance.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Finance was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Finance with id=${id}. Maybe Finance was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Finance with id=" + id
        });
      });
};

//删除
exports.delete = (req, res) => {
    const id = req.params.id;
    Finance.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Finance was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Finance with id=${id}. Maybe Finance was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Finance with id=" + id
        });
      });
};