const db = require("../models");
const ChukuStatelog = db.ChukuStatelog;
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
    const ChukuStatelogs = {
              userId:req.body.userId,
              chukuId: req.body.chukuId,
              oldstateid: req.body.oldstateid,
              newstateid:req.body.newstateid,
              operateId:req.body.operateId,
    };
    ChukuStatelog.create(ChukuStatelogs)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the ChukuStatelog."
        });
      });
  };
  
  //新建
  exports.findAll = (req, res) => {
      const chukuId = req.query.chukuId;
      var condition = chukuId ? { chukuId: chukuId}  : null;
    
      ChukuStatelog.findAll({
        where:condition
    })
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while retrieving ChukuStatelog."
          });
        });
  };
  
  //根据id查询
  exports.findOne = (req, res) => {
      const id = req.params.id;
      ChukuStatelog.findByPk(id)
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          res.status(500).send({
            message: "Error retrieving ChukuStatelog with id=" + id
          });
        });
  };
  
  
  //修改
  exports.update = (req, res) => {
      const id = req.params.id;
      ChukuStatelog.update(req.body, {
        where: { id: id }
      })
        .then(num => {
          if (num == 1) {
            res.send({
              message: "ChukuStatelog was updated successfully."
            });
          } else {
            res.send({
              message: `Cannot update ChukuStatelog with id=${id}. Maybe ChukuStatelog was not found or req.body is empty!`
            });
          }
        })
        .catch(err => {
          res.status(500).send({
            message: "Error updating ChukuStatelog with id=" + id
          });
        });
  };
  
  //删除
  exports.delete = (req, res) => {
      const id = req.params.id;
      ChukuStatelog.destroy({
        where: { id: id }
      })
        .then(num => {
          if (num == 1) {
            res.send({
              message: "ChukuStatelog was deleted successfully!"
            });
          } else {
            res.send({
              message: `Cannot delete ChukuStatelog with id=${id}. Maybe ChukuStatelog was not found!`
            });
          }
        })
        .catch(err => {
          res.status(500).send({
            message: "Could not delete ChukuStatelog with id=" + id
          });
        });
  };
  