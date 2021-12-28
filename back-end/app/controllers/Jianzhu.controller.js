const db = require("../models");
const Jianzhu = db.jianzhu;
const JianzhuState = db.JianzhuState;
const Op = db.Sequelize.Op;

// 新建controller层
exports.create = (req, res) => {
  // Validate request
  if (!req.body.builder) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
  const jianzhu = {
        code:req.body.code,
        builder:req.body.builder,
        item_name:req.body.item_name,
        time: req.body.time,
        jindu : req.body.jindu ,
        item_money:req.body.item_money,
        total_quota:req.body.total_quota,
        money:req.body.money,
        money1:req.body.money1,
        money2:req.body.money2,
        interest:req.body.interest,
        interest1:req.body.interest1,
        Return:req.body.Return,
        fax:req.body.fax,
        A:req.body.A,
        B:req.body.B,
        C:req.body.C,
        grade:req.body.grade,
        cause:req.body.cause,
        // current_process:req.body.current_process
  };
// 新增
  Jianzhu.create(jianzhu)
    .then(jianzhu => {
      jianzhu.setJianzhuState([1])
      res.send(jianzhu);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Jianzhu."
      });
    });
};
//从数据库查找所有,模糊查询
exports.findAll = (req, res) => {
    // const title = req.query.title;
    // var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
    Jianzhu.findAll({order: [['id', 'ASC']],include : [JianzhuState]})
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Jianzhu."
        });
      });
};
//根据id查找
exports.findOne = (req, res) => {
    Jianzhu.findOne({ where: { id: req.params.id },include : [JianzhuState] })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Jianzhu with id=" 
        });
      });
};

//修改
exports.update = (req, res) => {
    const id = req.params.id;
    Jianzhu.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Jianzhu was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Jianzhu with id=${id}. Maybe Jianzhu was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Jianzhu with id=" + id
        });
      });
};

//删除
exports.delete = (req, res) => {
    const id = req.params.id;
    Jianzhu.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Jianzhu was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Jianzhu with id=${id}. Maybe Jianzhu was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Jianzhu with id=" + id
        });
      });
};

