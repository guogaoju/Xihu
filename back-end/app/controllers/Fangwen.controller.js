const db = require("../models");
const Fangwen = db.fangwen;
const FangwenState = db.FangwenState;
const Op = db.Sequelize.Op;
// 新建controller层
exports.create = (req, res) => {
  // Validate request
  if (!req.body.qiye_name) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
  const fangwen = {
    code:req.body.code,
    qiye_name: req.body.qiye_name,
    visit_type:req.body.visit_type,
    visit_time: req.body.visit_time,
    contract:req.body.contract,
    remarks:req.body.remarks,
    // current_process:req.body.current_process,
  };
// 新增
  Fangwen.create(fangwen)
    .then(fangwen => {
      fangwen.setFangwenState([1])
      res.send(fangwen);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Fangwen."
      });
    });
};

//从数据库查找所有,模糊查询
exports.findAll = (req, res) => {
    // const title = req.query.title;
    // var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
    Fangwen.findAll({order: [['id', 'ASC']],include : [FangwenState]})
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Fangwen."
        });
      });
};

//根据id查找
exports.findOne = (req, res) => {
    Fangwen.findOne({ where: { id: req.params.id },include : [FangwenState] })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Fangwen with id=" + id
        });
      });
};
//修改
exports.update = (req, res) => {
    const id = req.params.id;
    Fangwen.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Fangwen was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Fangwen with id=${id}. Maybe Fangwen was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Fangwen with id=" + id
        });
      });
};

//删除
exports.delete = (req, res) => {
    const id = req.params.id;
    Fangwen.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Fangwen was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Fangwen with id=${id}. Maybe Fangwen was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Fangwen with id=" + id
        });
      });
};