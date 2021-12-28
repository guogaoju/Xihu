const db = require("../models");
const Dept = db.dept;
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
  const dept = {
        name:req.body.name,
  };
  Dept.create(dept)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Dept."
      });
    });
};
//从数据库查找所有,模糊查讯
exports.findAll = (req, res) => {
    // const title = req.query.title;
    // var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
    Dept.findAll()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Dept."
        });
      });
};

//根据id查找
exports.findOne = (req, res) => {
    const id = req.params.id;
    Dept.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Dept with id=" + id
        });
      });
};
//修改
exports.update = (req, res) => {
    const id = req.params.id;
    Dept.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Dept was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Dept with id=${id}. Maybe Dept was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Dept with id=" + id
        });
      });
};
//删除
exports.delete = (req, res) => {
    const id = req.params.id;
    Dept.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Dept was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Dept with id=${id}. Maybe Dept was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Dept with id=" + id
        });
      });
};
