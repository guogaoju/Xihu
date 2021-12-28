const db = require("../models");
const Addjinduwuliao = db.addjinduwuliao;
const Op = db.Sequelize.Op;

// 新建评级controller层
exports.create = (req, res) => {
  // Validate request
  if (!req.body.name) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
  // 新增
  const addjinduwuliao = {
        name: req.body.name,
        wname:req.body.wname,
        before_stock : req.body.before_stock ,
        consume:req.body.consume,
        after_stock:req.body.after_stock,
        jinduId:req.body.jinduId,
  };
  Addjinduwuliao.create(addjinduwuliao)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Addjinduwuliao."
      });
    });
};

//从数据库查找所有,模糊查询
exports.findAll = (req, res) => {
    const jinduId = req.query.jinduId;
    var condition = jinduId ? { jinduId: jinduId}  : null;
    Addjinduwuliao.findAll({
      where:condition
  })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Addjinduwuliao."
        });
      });
};

//根据id查找
exports.findOne = (req, res) => {
    const id = req.params.id;
    Addjinduwuliao.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Addjinduwuliao with id=" + id
        });
      });
};



