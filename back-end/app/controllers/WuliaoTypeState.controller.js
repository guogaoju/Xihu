const db = require("../models");
const WuliaoTypeState = db.WuliaoTypeState;
const Op = db.Sequelize.Op;
const Dept = db.dept;
//新建企业评级controller
exports.create = (req, res) => {
  // Validate request
  if (!req.body.nodeName) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
  //新增
  const WuliaoTypeStates = {
    nodeName:req.body.nodeName,
    
  };
  WuliaoTypeState.create(WuliaoTypeStates)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the WuliaoTypeState."
      });
    });
};

//从数据库查找所有，模糊查询
exports.findAll = (req, res) => {
    // const title = req.query.title;
    // var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
    WuliaoTypeState.findAll({include : [Dept]})
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving WuliaoTypeState."
        });
      });
};

// 根据id查询
exports.findOne = (req, res) => {
    // const id = req.params.id;

    WuliaoTypeState.findOne({ where: { id: req.params.id },include : [Dept] })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving WuliaoTypeState with id=" + id
        });
      });
};


//修改
exports.update = (req, res) => {
    const id = req.params.id;
    WuliaoTypeState.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "WuliaoTypeState was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update WuliaoTypeState with id=${id}. Maybe WuliaoTypeState was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating WuliaoTypeState with id=" + id
        });
      });
};

//删除
exports.delete = (req, res) => {
    const id = req.params.id;
    WuliaoTypeState.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "WuliaoTypeState was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete WuliaoTypeState with id=${id}. Maybe WuliaoTypeState was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete WuliaoTypeState with id=" + id
        });
      });
};
