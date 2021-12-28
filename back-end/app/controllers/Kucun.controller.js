const db = require("../models");
const Kucun = db.kucun;
const KucunState = db.KucunState;
const Op = db.Sequelize.Op;

// 新建controller层
exports.create = (req, res) => {
  // Validate request
  if (!req.body.item_name) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
  const kucun = {
        code:req.body.code,
        item_name:req.body.item_name,
        goods_type: req.body.goods_type,
        goods_danwei: req.body.goods_danwei ,
        before_stock:req.body.before_stock,
        after_stock:req.body.after_stock,
        // current_process:req.body.current_process
  };

// 新增
  Kucun.create(kucun)
    .then(kucun => {
      kucun.setKucunState([1])
      res.send(kucun);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Kucun."
      });
    });
};

//从数据库查找所有,模糊查询
exports.findAll = (req, res) => {
    // const title = req.query.title;
    // var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
    Kucun.findAll({order: [['id', 'ASC']],include : [KucunState]})
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Kucun."
        });
      });
};

//根据id查找
exports.findOne = (req, res) => {
    const id = req.params.id;
    Kucun.findOne({ where: { id: req.params.id },include : [KucunState] })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Kucun with id=" + id
        });
      });
};

//修改
exports.update = (req, res) => {
    const id = req.params.id;
    Kucun.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Kucun was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Kucun with id=${id}. Maybe Kucun was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Kucun with id=" + id
        });
      });
};
//删除
exports.delete = (req, res) => {
    const id = req.params.id;
    Kucun.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Kucun was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Kucun with id=${id}. Maybe Kucun was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Kucun with id=" + id
        });
      });
};
