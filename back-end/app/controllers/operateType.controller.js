const db = require("../models");
const operate = db.operate;
const Op = db.Sequelize.Op;

// 新建controller层
exports.create = (req, res) => {
  // Validate request
  if (!req.body.operate_name) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
  const operate = {
        operate_name:req.body.operate_name,
  };

// 新增
operate.create(operate)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the operate."
      });
    });
};

//从数据库查找所有,模糊查询
exports.findAll = (req, res) => {
    // const title = req.query.title;
    // var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
    operate.findAll()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving operate."
        });
      });
};

//根据id查找
exports.findOne = (req, res) => {
    const id = req.params.id;
    operate.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving operate with id=" + id
        });
      });
};

//修改
exports.update = (req, res) => {
    const id = req.params.id;
    operate.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "operate was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update operate with id=${id}. Maybe operate was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating operate with id=" + id
        });
      });
};
//删除
exports.delete = (req, res) => {
    const id = req.params.id;
    operate.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "operate was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete operate with id=${id}. Maybe operate was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete operate with id=" + id
        });
      });
};
