const db = require("../models");
const Fukuan = db.Fukuan;
const FukuanState = db.FukuanState;
const FukuanImage = db.FukuanImage;
const Op = db.Sequelize.Op;

// 新建采购controller层
exports.create = (req, res) => {
  // Validate request
  if (!req.body.qiye_name) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
// 新增
  const Fukuans = {
        code:req.body.code,
        qiye_name:req.body.qiye_name,
        item_name:req.body.item_name,
        money: req.body.money,
        totalmoney : req.body.totalmoney ,
        statement:req.body.statement,
        bill:req.body.bill,
        money1:req.body.money1,
        money2:req.body.money2,
        money3:req.body.money3,
        money4:req.body.money4,
        // current_process:req.body.current_process
  };
  Fukuan.create(Fukuans)
    .then(fukuan => {
      fukuan.setFukuanState([0])
      res.send(fukuan);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Fukuan."
      });
    });
};
//从数据库查找所有,模糊查讯
exports.findAll = (req, res) => {
    // const title = req.query.title;
    // var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
    Fukuan.findAll({order: [['id', 'ASC']],include : [FukuanState,FukuanImage]})
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Fukuan."
        });
      });
};

//根据id查找
exports.findOne = (req, res) => {
    const id = req.params.id;
    Fukuan.findOne({ where: { id: req.params.id },include : [FukuanState,FukuanImage] })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Fukuan with id=" + id
        });
      });
};
//修改
exports.update = (req, res) => {
    const id = req.params.id;
    Fukuan.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Fukuan was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Fukuan with id=${id}. Maybe Fukuan was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Fukuan with id=" + id
        });
      });
};
//删除
exports.delete = (req, res) => {
    const id = req.params.id;
    Fukuan.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Fukuan was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Fukuan with id=${id}. Maybe Fukuan was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Fukuan with id=" + id
        });
      });
};
