const db = require("../models");
const WuliaoType = db.wuliaotype;
const WuliaoTypeState = db.WuliaoTypeState;
const Op = db.Sequelize.Op;

//新增controller
exports.create = (req, res) => {
  // Validate request
  if (!req.body.name) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
  //添加
  const wuliaotype = {
    code:req.body.code,
    name: req.body.name,
    type: req.body.type,
    remarks:req.body.remarks,
    // current_process:req.body.current_process,
  };
  WuliaoType.create(wuliaotype)
    .then(wuliaotype => {
      wuliaotype.setWuliaoTypeState([1])
        res.send(wuliaotype)
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the WuliaoType."
      });
    });
};

//从数据库查找所有，模糊查询
exports.findAll = (req, res) => {
    const name = req.query.name;
    var condition = name ? { name: { [Op.like]: `%${name}%` } } : null;
    WuliaoType.findAll({order: [['id', 'ASC']], where: condition ,include : [WuliaoTypeState] })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving WuliaoType."
        });
      });
};

//根据id查询
exports.findOne = (req, res) => {
    const id = req.params.id;
    WuliaoType.findOne({ where: { id: req.params.id },include : [WuliaoTypeState] })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving WuliaoType with id=" + id
        });
      });
};


//修改
exports.update = (req, res) => {
    const id = req.params.id;
    WuliaoType.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "WuliaoType was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update WuliaoType with id=${id}. Maybe WuliaoType was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating WuliaoType with id=" + id
        });
      });
};

//删除
exports.delete = (req, res) => {
    const id = req.params.id;
    WuliaoType.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "WuliaoType was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete WuliaoType with id=${id}. Maybe WuliaoType was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete WuliaoType with id=" + id
        });
      });
};