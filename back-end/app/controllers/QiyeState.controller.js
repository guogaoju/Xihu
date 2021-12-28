const db = require("../models");
const QiyeState = db.QiyeState;
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
  const qiyeStateS = {
    nodeName:req.body.nodeName,
    
  };
  QiyeState.create(qiyeStateS)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the qiyeState."
      });
    });
};

//从数据库查找所有，模糊查询
exports.findAll = (req, res) => {
    // const title = req.query.title;
    // var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
    QiyeState.findAll({include : [Dept]})
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving QiyeState."
        });
      });
};

// 根据id查询
exports.findOne = (req, res) => {
    // const id = req.params.id;

    QiyeState.findOne({ where: { id: req.params.id },include : [Dept] })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving QiyePingji with id=" + id
        });
      });
};


//修改
exports.update = (req, res) => {
    const id = req.params.id;
    QiyeState.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "QiyePingji was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update QiyePingji with id=${id}. Maybe QiyePingji was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating QiyePingji with id=" + id
        });
      });
};

//删除
exports.delete = (req, res) => {
    const id = req.params.id;
    QiyeState.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "QiyePingji was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete QiyePingji with id=${id}. Maybe QiyePingji was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete QiyePingji with id=" + id
        });
      });
};
