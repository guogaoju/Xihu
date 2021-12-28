const db = require("../models");
const Dange = db.Dange;
const Op = db.Sequelize.Op;

// 新建controller层
exports.create = (req, res) => {
  const dange = {
    name: req.body.name,
    value: req.body.value,
  };

// 新增
Dange.create(dange)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Dange."
      });
    });
};


//从数据库查找所有,模糊查询
exports.findAll = (req, res) => {
    const name = req.query.name;
    var condition = name ? { name: { [Op.like]: `%${name}%` } } : null;
    Dange.findAll({attributes: ['name', 'value'], order: [['id', 'ASC']],where: condition})
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Dange."
        });
      });
};

//根据id查找
exports.findOne = (req, res) => {
    const id = req.params.id;
    Dange.findOne({ where: { id: req.params.id }})
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Dange with id=" + id
        });
      });
};

//修改
exports.update = (req, res) => {
    const id = req.params.id;
    Dange.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Dange was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Dange with id=${id}. Maybe Dange was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Dange with id=" + id
        });
      });
};

//删除
exports.delete = (req, res) => {
    const id = req.params.id;
    Dange.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Dange was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Dange with id=${id}. Maybe Dange was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Dange with id=" + id
        });
      });
};