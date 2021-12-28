const db = require("../models");
const KucunState = db.KucunState;
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
  const KucunStates = {
    nodeName:req.body.nodeName,
    
  };
  KucunState.create(KucunStates)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the KucunState."
      });
    });
};

//从数据库查找所有，模糊查询
exports.findAll = (req, res) => {
    // const title = req.query.title;
    // var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
    KucunState.findAll({include : [Dept]})
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving KucunState."
        });
      });
};

// 根据id查询
exports.findOne = (req, res) => {
    // const id = req.params.id;

    KucunState.findOne({ where: { id: req.params.id },include : [Dept] })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving KucunState with id=" + id
        });
      });
};


//修改
exports.update = (req, res) => {
    const id = req.params.id;
    KucunState.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "KucunState was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update KucunState with id=${id}. Maybe KucunState was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating KucunState with id=" + id
        });
      });
};

//删除
exports.delete = (req, res) => {
    const id = req.params.id;
    KucunState.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "KucunState was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete KucunState with id=${id}. Maybe KucunState was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete KucunState with id=" + id
        });
      });
};
