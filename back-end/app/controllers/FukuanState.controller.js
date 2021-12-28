const db = require("../models");
const FukuanState = db.FukuanState;
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
  const FukuanStates = {
    nodeName:req.body.nodeName,
    
  };
  FukuanState.create(FukuanStates)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the FukuanState."
      });
    });
};

//从数据库查找所有，模糊查询
exports.findAll = (req, res) => {
    // const title = req.query.title;
    // var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
    FukuanState.findAll({include : [Dept]})
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving FukuanState."
        });
      });
};

// 根据id查询
exports.findOne = (req, res) => {
    const id = req.params.id;

    FukuanState.findOne({ where: { id: req.params.id },include : [Dept] })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving FukuanState with id=" + id
        });
      });
};


//修改
exports.update = (req, res) => {
    const id = req.params.id;
    FukuanState.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "FukuanState was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update FukuanState with id=${id}. Maybe FukuanState was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating FukuanState with id=" + id
        });
      });
};

//删除
exports.delete = (req, res) => {
    const id = req.params.id;
    FukuanState.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "FukuanState was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete FukuanState with id=${id}. Maybe FukuanState was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete FukuanState with id=" + id
        });
      });
};
