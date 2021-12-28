
const db = require("../models");
const Daiban = db.Daiban;
const Op = db.Sequelize.Op;

// 新建controller层
exports.create = (req, res) => {
  // Validate request
  if (!req.body.name) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
  const daiban = {
    deptId: req.body.deptId,
    name: req.body.name,
    link: req.body.link,
    sum:req.body.sum,
  };

// 新增
Daiban.create(daiban)
    .then(data => {
        data.increment(['sum']).then(data1 =>{
            res.send(data1);
        })
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Daiban."
      });
    });
};


//从数据库查找所有,模糊查询
exports.findAll = (req, res) => {
    const deptId = req.query.deptId;
    var condition = deptId ? { deptId: deptId}  : null;
    Daiban.findAll({where:condition,order: [['id', 'ASC']]})
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Daiban."
        });
      });
};
//根据id查找
exports.findOne = (req, res) => {
  const id = req.params.id;
  Daiban.findOne({ where: { id: req.params.id }})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Danwei with id=" + id
      });
    });
};
//sum增加1
exports.findDaiban = (req, res) => {
    Daiban.findOne({ where: { deptId: req.params.deptId, name:req.params.name} })
      .then(data => {
        data.increment(['sum']).then(data =>{
          // res.send(data1);
      })
      res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Daiban with id=" 
        });
      });
};
//sum减少1
exports.findDaiban1 = (req, res) => {
  Daiban.findOne({ where: { deptId: req.params.deptId, name:req.params.name} })
    .then(data => {
      data.decrement(['sum']).then(data =>{
        // res.send(data1);
    })
    res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Daiban with id=" 
      });
    });
};
//修改
exports.update = (req, res) => {
    const id = req.params.id;
    Daiban.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Daiban was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Daiban with id=${id}. Maybe Daiban was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Danwei with id=" + id
        });
      });
};

//删除
exports.delete = (req, res) => {
    const id = req.params.id;
    Daiban.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Daiban was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Daiban with id=${id}. Maybe Daiban was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Danwei with id=" + id
        });
      });
};