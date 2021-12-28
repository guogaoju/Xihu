const db = require("../models");
const PingjiState = db.PingjiState;
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
  const PingjiStates = {
    nodeName:req.body.nodeName,
    
  };
  PingjiState.create(PingjiStates)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the PingjiState."
      });
    });
};

//从数据库查找所有，模糊查询
exports.findAll = (req, res) => {
    // const title = req.query.title;
    // var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
    PingjiState.findAll({include : [Dept]})
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving PingjiState."
        });
      });
};

// 根据id查询
exports.findOne = (req, res) => {
    // const id = req.params.id;

    PingjiState.findOne({ where: { id: req.params.id },include : [Dept] })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving PingjiState with id=" + id
        });
      });
};


//修改
exports.update = (req, res) => {
    const id = req.params.id;
    PingjiState.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "PingjiState was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update PingjiState with id=${id}. Maybe PingjiState was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating PingjiState with id=" + id
        });
      });
};

//删除
exports.delete = (req, res) => {
    const id = req.params.id;
    PingjiState.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "PingjiState was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete PingjiState with id=${id}. Maybe PingjiState was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete PingjiState with id=" + id
        });
      });
};
