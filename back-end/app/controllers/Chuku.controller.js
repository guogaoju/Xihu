const db = require("../models");
const Chuku = db.chuku;
const ChukuState = db.ChukuState;
const Op = db.Sequelize.Op;

// 新建评级controller层
exports.create = (req, res) => {
  // Validate request
  if (!req.body.item_name) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

// 新增
  const chuku = {
            code:req.body.code,
            item_name:req.body.item_name,
            goods_name: req.body.goods_name,
            goods_danwei:req.body.goods_danwei,
            chuku_number:req.body.chuku_number,
            before_stock:req.body.before_stock,
            after_stock:req.body.after_stock,
            // current_process:req.body.current_process
  };
  Chuku.create(chuku)
    .then(chuku => {
      chuku.setChukuState([1])
      res.send(chuku);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Chuku."
      });
    });
};

//从数据库查找所有,模糊查询
exports.findAll = (req, res) => {
  let countPerPage = 2, currentPage = 1;
    // const title = req.query.title;
    // var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
    Chuku.findAll({order: [['id', 'ASC']],include : [ChukuState]})
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Chuku."
        });
      });
};

//根据id查找
exports.findOne = (req, res) => {
    const id = req.params.id;
    Chuku.findOne({ where: { id: req.params.id },include : [ChukuState] })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Chuku with id=" + id
        });
      });
};

//修改
exports.update = (req, res) => {
    const id = req.params.id;
    Chuku.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Chuku was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Chuku with id=${id}. Maybe Chuku was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Chuku with id=" + id
        });
      });
};

//删除
exports.delete = (req, res) => {
    const id = req.params.id;
    Chuku.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Chuku was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Chuku with id=${id}. Maybe Chuku was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Chuku with id=" + id
        });
      });
};
