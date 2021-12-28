const db = require("../models");
const WuliaoStatelog = db.WuliaoStatelog;
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
    const WuliaoStatelogs = {
              userId:req.body.userId,
              wuliaoId: req.body.wuliaoId,
              oldstateid: req.body.oldstateid,
              newstateid:req.body.newstateid,
              operateId:req.body.operateId,
    };
    WuliaoStatelog.create(WuliaoStatelogs)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the WuliaoStatelog."
        });
      });
  };
  
  //新建
  exports.findAll = (req, res) => {
      const wuliaoId = req.query.wuliaoId;
      var condition = wuliaoId ? { wuliaoId: wuliaoId}  : null;
    
      WuliaoStatelog.findAll({
        where:condition
    })
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while retrieving WuliaoStatelog."
          });
        });
  };
  
  //根据id查询
  exports.findOne = (req, res) => {
      const id = req.params.id;
      WuliaoStatelog.findByPk(id)
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          res.status(500).send({
            message: "Error retrieving WuliaoStatelog with id=" + id
          });
        });
  };
  
  
  //修改
  exports.update = (req, res) => {
      const id = req.params.id;
      WuliaoStatelog.update(req.body, {
        where: { id: id }
      })
        .then(num => {
          if (num == 1) {
            res.send({
              message: "WuliaoStatelog was updated successfully."
            });
          } else {
            res.send({
              message: `Cannot update WuliaoStatelog with id=${id}. Maybe WuliaoStatelog was not found or req.body is empty!`
            });
          }
        })
        .catch(err => {
          res.status(500).send({
            message: "Error updating WuliaoStatelog with id=" + id
          });
        });
  };
  
  //删除
  exports.delete = (req, res) => {
      const id = req.params.id;
      WuliaoStatelog.destroy({
        where: { id: id }
      })
        .then(num => {
          if (num == 1) {
            res.send({
              message: "WuliaoStatelog was deleted successfully!"
            });
          } else {
            res.send({
              message: `Cannot delete WuliaoStatelog with id=${id}. Maybe WuliaoStatelog was not found!`
            });
          }
        })
        .catch(err => {
          res.status(500).send({
            message: "Could not delete WuliaoStatelog with id=" + id
          });
        });
  };
  