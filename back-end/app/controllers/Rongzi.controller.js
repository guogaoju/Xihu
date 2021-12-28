const db = require("../models");
const Rongzi = db.Rongzi;
const Op = db.Sequelize.Op;

//新建
exports.create = (req, res) => {
  // Validate request
  if (!req.body.wuliaotype) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
  //新建
  const Rongzis = {
    supplier_name:req.body.supplier_name,
    wuliaotype:req.body.wuliaotype,
    danwei: req.body.danwei,
    shenqing: req.body.shenqing,
    price:req.body.price,
    yugutatol:req.body.yugutatol,
    shijitatol:req.body.shijitatol,
    rate:req.body.rate,
    caigouId:req.body.caigouId,
  };
  Rongzi.create(Rongzis)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Rongzi."
      });
    });
};

exports.findAll1 = (req, res) => {
  const fukuanId = req.query.fukuanId;
  var condition = fukuanId ? { fukuanId: fukuanId}  : null;
  Rongzi.findAll({
    where:condition
})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Rongzi."
      });
    });
};
//新建
exports.findAll = (req, res) => {
    const caigouId = req.query.caigouId;
    var condition = caigouId ? { caigouId: caigouId}  : null;
    Rongzi.findAll({
      where:condition
  })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Rongzi."
        });
      });
};

//根据id查询
exports.findOne = (req, res) => {
    const id = req.params.id;
    Rongzi.findOne({ where: { id: req.params.id }})
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Ruku with id=" + id
        });
      });
};


//修改
exports.update = (req, res) => {
    const id = req.params.id;
    Rongzi.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Rongzi was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Rongzi with id=${id}. Maybe Rongzi was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Rongzi with id=" + id
        });
      });
};

//删除
exports.delete = (req, res) => {
    const id = req.params.id;
    Rongzi.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Rongzi was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Rongzi with id=${id}. Maybe Rongzi was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Rongzi with id=" + id
        });
      });
};
