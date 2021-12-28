
const db = require("../models");
const Code = db.Code;
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
  const code = {
    name: req.body.name,
    code_name: req.body.code_name,
    sum:req.body.sum,
  };

// 新增
Code.create(code)
    .then(data => {
        // data.increment(['sum']).then(data1 =>{
        //     res.send(data1);
        // })
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Code."
      });
    });
};


//从数据库查找所有,模糊查询
exports.findAll = (req, res) => {
    const name = req.query.name;
    var condition = name ? { name: { [Op.like]: `%${name}%` } } : null;
    Code.findAll({where:condition})
      .then(data => {
          data[0].increment(['sum']).then(data1 =>{
            // res.send(data1);
        })
        res.send(data[0]);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Code."
        });
      });
};
//根据id查找
exports.findOne = (req, res) => {
  const id = req.params.id;
  Code.findOne({ where: { id: req.params.id }})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Code with id=" + id
      });
    });
};
//修改
exports.update = (req, res) => {
    const id = req.params.id;
    Code.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Code was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Code with id=${id}. Maybe Code was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Code with id=" + id
        });
      });
};

//删除
exports.delete = (req, res) => {
    const id = req.params.id;
    Code.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Code was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Code with id=${id}. Maybe Code was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Danwei with id=" + id
        });
      });
};