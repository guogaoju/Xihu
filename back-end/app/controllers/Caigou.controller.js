const db = require("../models");
const Caigou = db.caigou;
const CaigouState = db.CaigouState;
const CaigouImage = db.CaigouImage;
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
  const caigou = {
        code:req.body.code,
        qiye_name:req.body.qiye_name,
        item_name:req.body.item_name,
        money: req.body.money,
        totalmoney : req.body.totalmoney ,
        statement:req.body.statement,
        delivery_note:req.body.delivery_note,
        bill:req.body.bill,
        money1:req.body.money1,
        money2:req.body.money2,
        money3:req.body.money3,
        money4:req.body.money4,
        // current_process:req.body.current_process
  };
  Caigou.create(caigou)
    .then(caigou => {
      caigou.setCaigouState([1])
      res.send(caigou);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Caigou."
      });
    });
};
//从数据库查找所有,模糊查讯
exports.findAll = (req, res) => {
    // const title = req.query.title;
    // var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
    Caigou.findAll({order: [['id', 'ASC']],include : [CaigouState,CaigouImage]})
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Caigou."
        });
      });
};

//根据id查找
exports.findOne = (req, res) => {
    const id = req.params.id;
    Caigou.findOne({ where: { id: req.params.id },include : [CaigouState,CaigouImage] })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Caigou with id=" + id
        });
      });
};
//修改
exports.update = (req, res) => {
    const id = req.params.id;
    Caigou.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Caigou was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Caigou with id=${id}. Maybe Caigou was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Caigou with id=" + id
        });
      });
};
//删除
exports.delete = (req, res) => {
    const id = req.params.id;
    Caigou.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Caigou was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Caigou with id=${id}. Maybe Caigou was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Caigou with id=" + id
        });
      });
};
