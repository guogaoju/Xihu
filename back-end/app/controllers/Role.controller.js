const db = require("../models");
const Role = db.role;
const Op = db.Sequelize.Op;

// 新建采购controller层
exports.create = (req, res) => {
  // Validate request
  if (!req.body.name) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
// 新增
  const role = {
        id:req.body.id,
        name:req.body.name,
  };
  Role.create(role)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the role."
      });
    });
};
//从数据库查找所有,模糊查讯
exports.findAll = (req, res) => {
    // const title = req.query.title;
    // var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
    Role.findAll()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving role."
        });
      });
};

//根据id查找
exports.findOne = (req, res) => {
    const id = req.params.id;
    Role.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving role with id=" + id
        });
      });
};
//修改
exports.update = (req, res) => {
    const id = req.params.id;
    Role.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "role was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update role with id=${id}. Maybe role was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating role with id=" + id
        });
      });
};
//删除
exports.delete = (req, res) => {
    const id = req.params.id;
    Role.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "role was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete role with id=${id}. Maybe role was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete role with id=" + id
        });
      });
};
