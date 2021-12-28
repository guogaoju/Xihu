const db = require("../models");
const CaiGouwuliao = db.caigouwuliao;
const Op = db.Sequelize.Op;

// 新建采购物料controller层
exports.create = (req, res) => {
  // Validate request
  if (!req.body.name) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
  const caigouwuliao = {
        name: req.body.name,
        wname:req.body.wname,
        shu : req.body.shu ,
        unit_price:req.body.unit_price,
        unit_totalprice:req.body.unit_totalprice,
        supplier:req.body.supplier,
        reality_number:req.body.reality_number,
        reality_price:req.body.reality_price,
        reality_totalprice:req.body.reality_totalprice,
        tax_rate:req.body.tax_rate,
        tax_rateprice:req.body.tax_rateprice,
        tax_ratemoney:req.body.tax_ratemoney,
        time:req.body.time,
  };
  // 新增
  CaiGouwuliao.create(caigouwuliao)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the CaiGouwuliao."
      });
    });
};


//从数据库查找所有,模糊查询
exports.findAll = (req, res) => {
    // const title = req.query.title;
    // var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
    CaiGouwuliao.findAll()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving CaiGouwuliao."
        });
      });
};


//根据id查找
exports.findOne = (req, res) => {
    const id = req.params.id;
    CaiGouwuliao.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving CaiGouwuliao with id=" + id
        });
      });
};



