const db = require("../models");
const Fukuanwuliao = db.Fukuanwuliao;
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
  const Fukuanwuliaos = {
    supplier_name:req.body.supplier_name,
    wuliaotype:req.body.wuliaotype,
    danwei: req.body.danwei,
    shenqing: req.body.shenqing,
    price:req.body.price,
    yugutatol:req.body.yugutatol,
    shijitatol:req.body.shijitatol,
    rate:req.body.rate,
    fukuanId:req.body.fukuanId,
  };
  Fukuanwuliao.create(Fukuanwuliaos)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Fukuanwuliao."
      });
    });
};

exports.findAll = (req, res) => {
  const fukuanId = req.query.fukuanId;
  var condition = fukuanId ? { fukuanId: fukuanId}  : null;
  Fukuanwuliao.findAll({
    where:condition
})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Fukuanwuliao."
      });
    });
};
//根据id查询
exports.findOne = (req, res) => {
    const id = req.params.id;
    Fukuanwuliao.findOne({ where: { id: req.params.id }})
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Fukuanwuliao with id=" + id
        });
      });
};


//修改
exports.update = (req, res) => {
    const id = req.params.id;
    Fukuanwuliao.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Fukuanwuliao was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Fukuanwuliao with id=${id}. Maybe Fukuanwuliao was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Fukuanwuliao with id=" + id
        });
      });
};

//删除
exports.delete = (req, res) => {
    const id = req.params.id;
    Fukuanwuliao.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Fukuanwuliao was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Fukuanwuliao with id=${id}. Maybe Fukuanwuliao was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Fukuanwuliao with id=" + id
        });
      });
};
