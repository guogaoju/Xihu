const db = require("../models");
const DanweiStatelog = db.DanweiStatelog;
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
    const DanweiStatelogs = {
              userId:req.body.userId,
              danweiId: req.body.danweiId,
              oldstateid: req.body.oldstateid,
              newstateid:req.body.newstateid,
              operateId:req.body.operateId,
    };
    DanweiStatelog.create(DanweiStatelogs)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the DanweiStatelog."
        });
      });
  };
  
  //新建
  exports.findAll = (req, res) => {
      const danweiId = req.query.danweiId;
      var condition = danweiId ? { danweiId: danweiId}  : null;
    
      DanweiStatelog.findAll({
        where:condition
    })
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while retrieving DanweiStatelog."
          });
        });
  };
  
  //根据id查询
  exports.findOne = (req, res) => {
      const id = req.params.id;
      DanweiStatelog.findByPk(id)
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          res.status(500).send({
            message: "Error retrieving DanweiStatelog with id=" + id
          });
        });
  };
  
  
  //修改
  exports.update = (req, res) => {
      const id = req.params.id;
      DanweiStatelog.update(req.body, {
        where: { id: id }
      })
        .then(num => {
          if (num == 1) {
            res.send({
              message: "DanweiStatelog was updated successfully."
            });
          } else {
            res.send({
              message: `Cannot update DanweiStatelog with id=${id}. Maybe DanweiStatelog was not found or req.body is empty!`
            });
          }
        })
        .catch(err => {
          res.status(500).send({
            message: "Error updating DanweiStatelog with id=" + id
          });
        });
  };
  
  //删除
  exports.delete = (req, res) => {
      const id = req.params.id;
      DanweiStatelog.destroy({
        where: { id: id }
      })
        .then(num => {
          if (num == 1) {
            res.send({
              message: "DanweiStatelog was deleted successfully!"
            });
          } else {
            res.send({
              message: `Cannot delete DanweiStatelog with id=${id}. Maybe DanweiStatelog was not found!`
            });
          }
        })
        .catch(err => {
          res.status(500).send({
            message: "Could not delete DanweiStatelog with id=" + id
          });
        });
  };
  