const db = require("../models");
const Jindu = db.jindu;
const JinduState = db.JinduState;
const image = db.images;
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
  const jindu = {
        code:req.body.code,
        item_name:req.body.item_name,
        address:req.body.address,
        introduction:req.body.introduction,
        scale:req.body.scale,
        before_jindu: req.body.before_jindu,
        after_jindu: req.body.after_jindu ,
        total_money:req.body.total_money,
        surplus_money: req.body.surplus_money ,
        use_money:req.body.use_money,
        photo:req.body.photo,
        // current_process:req.body.current_process
  };

// 新增
  Jindu.create(jindu)
    .then(jindu => {
      jindu.setJinduState([1])
      res.send(jindu);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Jindu."
      });
    });
};

//从数据库查找所有,模糊查询
exports.findAll = (req, res) => {
    // const title = req.query.title;
    // var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
    Jindu.findAll({order: [['id', 'ASC']],include : [JinduState,image]})
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Jindu."
        });
      });
};

//根据id查找
exports.findOne = (req, res) => {
    const id = req.params.id;
    Jindu.findOne({ where: { id: req.params.id },include : [JinduState,image] })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Jindu with id=" + id
        });
      });
};

//修改
exports.update = (req, res) => {
    const id = req.params.id;
    Jindu.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Jindu was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Jindu with id=${id}. Maybe Jindu was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Jindu with id=" + id
        });
      });
};
//删除
exports.delete = (req, res) => {
    const id = req.params.id;
    Jindu.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Jindu was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Jindu with id=${id}. Maybe Jindu was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Jindu with id=" + id
        });
      });
};
