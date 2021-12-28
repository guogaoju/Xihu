const db = require("../models");
const QiyePingji = db.qiyepingji;
const QiyepingjiState = db.QiyepingjiState;
const Op = db.Sequelize.Op;

//新建企业评级controller
exports.create = (req, res) => {
  // Validate request
  if (!req.body.qiye_name) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
  
  //新增
  const qiyepingji = {
    code:req.body.code,
    qiye_name:req.body.qiye_name,
    trade:req.body.trade,
    year:req.body.year,
    quarter:req.body.quarter,
    score1:req.body.score1,
    score2:req.body.score2,
    score3:req.body.score3,
    score4:req.body.score4,
    score5:req.body.score5,
    score6:req.body.score6,
    score7:req.body.score7,
    score8:req.body.score8,
    score9:req.body.score9,
    quantify_points:req.body.quantify_points,
    qualitative_points:req.body.qualitative_points,
    total_points:req.body.total_points,
    // current_process:req.body.current_process,
  };
  QiyePingji.create(qiyepingji)
    .then(qiyepingji => {
      qiyepingji.setQiyepingjiState([1])
      res.send(qiyepingji);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the QiyePingji."
      });
    });
};

//从数据库查找所有，模糊查询
exports.findAll = (req, res) => {
    // const title = req.query.title;
    // var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
    QiyePingji.findAll({order: [['id', 'ASC']],include : [QiyepingjiState]})
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving QiyePingji."
        });
      });
};

// 根据id查询
exports.findOne = (req, res) => {
    QiyePingji.findOne({ where: { id: req.params.id },include : [QiyepingjiState] })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving QiyePingji with id=" + id
        });
      });
};


//修改
exports.update = (req, res) => {
    const id = req.params.id;
    QiyePingji.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "QiyePingji was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update QiyePingji with id=${id}. Maybe QiyePingji was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating QiyePingji with id=" + id
        });
      });
};

//删除
exports.delete = (req, res) => {
    const id = req.params.id;
    QiyePingji.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "QiyePingji was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete QiyePingji with id=${id}. Maybe QiyePingji was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete QiyePingji with id=" + id
        });
      });
};
