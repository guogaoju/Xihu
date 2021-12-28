const db = require("../models");
const Bumen = db.bumen;
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
  const bumen = {
        name:req.body.name,
        username:req.body.username,
        dept: req.body.dept,
  };
  Bumen.create(bumen)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the bumen."
      });
    });
};
//从数据库查找所有,模糊查讯
exports.findAll = (req, res) => {
    // const title = req.query.title;
    // var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
    Bumen.findAll()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving bumen."
        });
      });
};

//根据id查找
exports.findOne = (req, res) => {
    const id = req.params.id;
    Bumen.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving bumen with id=" + id
        });
      });
};
//修改
exports.update = (req, res) => {
    const id = req.params.id;
    Bumen.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "bumen was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update bumen with id=${id}. Maybe bumen was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating bumen with id=" + id
        });
      });
};
//删除
exports.delete = (req, res) => {
    const id = req.params.id;
    Bumen.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "bumen was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete bumen with id=${id}. Maybe bumen was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete bumen with id=" + id
        });
      });
};
