const db = require("../models");
const WuliaoTypeStatelog = db.WuliaoTypeStatelog;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    // Validate request
    // if (!req.body.userid) {
    //   res.status(400).send({
    //     message: "Content can not be empty!"
    //   });
    //   return;
    // }
    //新建
    const WuliaoTypeStatelogs = {
              userId:req.body.userId,
              wuliaotypeId: req.body.wuliaotypeId,
              oldstateid: req.body.oldstateid,
              newstateid:req.body.newstateid,
              operateId:req.body.operateId,
    };
    WuliaoTypeStatelog.create(WuliaoTypeStatelogs)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the WuliaoTypeStatelog."
        });
      });
  };
  
  //新建
  exports.findAll = (req, res) => {
      const wuliaotypeId = req.query.wuliaotypeId;
      var condition = wuliaotypeId ? { wuliaotypeId: wuliaotypeId}  : null;
    
      WuliaoTypeStatelog.findAll({
        where:condition
    })
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while retrieving WuliaoTypeStatelog."
          });
        });
  };
  
  //根据id查询
  exports.findOne = (req, res) => {
      const id = req.params.id;
      WuliaoTypeStatelog.findByPk(id)
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          res.status(500).send({
            message: "Error retrieving WuliaoTypeStatelog with id=" + id
          });
        });
  };
  
  
  //修改
  exports.update = (req, res) => {
      const id = req.params.id;
      WuliaoTypeStatelog.update(req.body, {
        where: { id: id }
      })
        .then(num => {
          if (num == 1) {
            res.send({
              message: "WuliaoTypeStatelog was updated successfully."
            });
          } else {
            res.send({
              message: `Cannot update WuliaoTypeStatelog with id=${id}. Maybe WuliaoTypeStatelog was not found or req.body is empty!`
            });
          }
        })
        .catch(err => {
          res.status(500).send({
            message: "Error updating WuliaoTypeStatelog with id=" + id
          });
        });
  };
  
  //删除
  exports.delete = (req, res) => {
      const id = req.params.id;
      WuliaoTypeStatelog.destroy({
        where: { id: id }
      })
        .then(num => {
          if (num == 1) {
            res.send({
              message: "WuliaoTypeStatelog was deleted successfully!"
            });
          } else {
            res.send({
              message: `Cannot delete WuliaoTypeStatelog with id=${id}. Maybe WuliaoTypeStatelog was not found!`
            });
          }
        })
        .catch(err => {
          res.status(500).send({
            message: "Could not delete WuliaoTypeStatelog with id=" + id
          });
        });
  };
  