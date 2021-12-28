const db = require("../models");
const Wuliao = db.wuliao;
const WuliaoState = db.WuliaoState;
const Op = db.Sequelize.Op;
const fs = require("fs");

//新建
exports.create = (req, res) => {
  // Validate request
  try{
    if (!req.body.name) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      // return;
    }
    //新增
    const wuliao = {
      code:req.body.code,
      name: req.body.name,
      Specification:req.body.Specification,
      wuliaotype: req.body.wuliaotype,
      danwei:req.body.danwei,
      //用前端传过来的正确的url
      avatar:req.body.avatar,
      remarks:req.body.remarks,
      // current_process:req.body.current_process,
    };
    Wuliao.create(wuliao)
      .then(wuliao => {
        wuliao.setWuliaoState([1])
        res.send(wuliao)
      })
      .catch(err => {
        return res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Wuliao."
        });
      });
  }catch (error) {
    console.log(error);
    return res.send(`Error when trying upload images: ${error}`);
  }
  
};

//从数据库查询所有，迷糊查询
exports.findAll = (req, res) => {
    const name = req.query.name;
    var condition = name ? { name: { [Op.like]: `%${name}%` } } : null;
  
    Wuliao.findAll({order: [['id', 'ASC']], where: condition ,include : [WuliaoState]})
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Wuliao."
        });
      });
};

//根据id查询
exports.findOne = (req, res) => {
    const id = req.params.id;

    Wuliao.findOne({ where: { id: req.params.id },include : [WuliaoState] })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Wuliao with id=" + id
        });
      });
};


//修改
exports.update = (req, res) => {
    const id = req.params.id;

    Wuliao.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          return res.send({
            message: "Wuliao was updated successfully."
          });
        } else {
          return res.send({
            message: `Cannot update Wuliao with id=${id}. Maybe Wuliao was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        return  res.status(500).send({
          message: "Error updating Wuliao with id=" + id
        });
      });
};

//删除
exports.delete = (req, res) => {
    const id = req.params.id;

    Wuliao.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Wuliao was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Wuliao with id=${id}. Maybe Wuliao was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Wuliao with id=" + id
        });
      });
};
