const db = require("../models");
const Danwei = db.danwei;
const DanweiState = db.DanweiState;
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
  const danwei = {
    code:req.body.code,
    name: req.body.name,
    type: req.body.type,
    remarks:req.body.remarks,
    current_process:req.body.current_process,
  };

// 新增
  Danwei.create(danwei)
    .then(danwei => {
      danwei.setDanweiState([1])
      res.send(danwei);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Danwei."
      });
    });
};


//从数据库查找所有,模糊查询
exports.findAll = (req, res) => {
    const name = req.query.name;
    var condition = name ? { name: { [Op.like]: `%${name}%` } } : null;
    Danwei.findAll({ order: [['id', 'ASC']],where: condition ,include : [DanweiState]})
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Danwei."
        });
      });
};

//根据id查找
exports.findOne = (req, res) => {
    const id = req.params.id;
    Danwei.findOne({ where: { id: req.params.id },include : [DanweiState] })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Danwei with id=" + id
        });
      });
};

//修改
exports.update = (req, res) => {
    const id = req.params.id;
    Danwei.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Danwei was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Danwei with id=${id}. Maybe Danwei was not found or req.body is empty!`
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
    Danwei.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Danwei was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Danwei with id=${id}. Maybe Danwei was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Danwei with id=" + id
        });
      });
};