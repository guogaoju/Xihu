const db = require("../models");
const Pingji = db.pingji;
const PingjiState = db.PingjiState;
const Op = db.Sequelize.Op;

// 新建controller层
exports.create = (req, res) => {
  // Validate request
  if (!req.body.supplier_name) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
  const pingji = {
    code:req.body.code,
    supplier_name:req.body.supplier_name,
    year:req.body.year,
    score1:req.body.score1,
    score2:req.body.score2,
    score3:req.body.score3,
    score4:req.body.score4,
    score5:req.body.score5,
    quarter:req.body.quarter,
    quantify_points:req.body.quantify_points,
    qualitative_points:req.body.qualitative_points,
    total_points:req.body.total_points,
    // current_process:req.body.current_process,
  };

// 新增
  Pingji.create(pingji)
    .then(pingji => {
      pingji.setPingjiState([1])
      res.send(pingji);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the pingji."
      });
    });
};

//从数据库查找所有,模糊查询
exports.findAll = (req, res) => {
    const total_points = req.query.total_points;
    var condition = total_points ? { total_points: { [Op.like]: `%${total_points}%` } } : null;
    Pingji.findAll({ order: [['id', 'ASC']],where: condition ,include : [PingjiState]})
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving pingji."
        });
      });
};

//根据id查找
exports.findOne = (req, res) => {
    Pingji.findOne({ where: { id: req.params.id },include : [PingjiState] })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving pingji with id=" + id
        });
      });
};

//修改
exports.update = (req, res) => {
    const id = req.params.id;
    Pingji.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "pingji was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update pingji with id=${id}. Maybe pingji was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating pingji with id=" + id
        });
      });
};
//删除
exports.delete = (req, res) => {
    const id = req.params.id;
    Pingji.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "pingji was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete pingji with id=${id}. Maybe pingji was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete pingji with id=" + id
        });
      });
};