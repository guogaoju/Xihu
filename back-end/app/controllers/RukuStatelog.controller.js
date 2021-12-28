const db = require("../models");
const RukuStatelog = db.RukuStatelog;
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
    const RukuStatelogs = {
              userId:req.body.userId,
              rukuId: req.body.rukuId,
              oldstateid: req.body.oldstateid,
              newstateid:req.body.newstateid,
              operateId:req.body.operateId,
    };
    RukuStatelog.create(RukuStatelogs)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the RukuStatelog."
        });
      });
  };
  
  //新建
  exports.findAll = (req, res) => {
      const rukuId = req.query.rukuId;
      var condition = rukuId ? { rukuId: rukuId}  : null;
    
      RukuStatelog.findAll({
        where:condition
    })
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while retrieving RukuStatelog."
          });
        });
  };
  
  //根据id查询
  exports.findOne = (req, res) => {
      const id = req.params.id;
      RukuStatelog.findByPk(id)
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          res.status(500).send({
            message: "Error retrieving RukuStatelog with id=" + id
          });
        });
  };
  
  
  //修改
  exports.update = (req, res) => {
      const id = req.params.id;
      RukuStatelog.update(req.body, {
        where: { id: id }
      })
        .then(num => {
          if (num == 1) {
            res.send({
              message: "RukuStatelog was updated successfully."
            });
          } else {
            res.send({
              message: `Cannot update RukuStatelog with id=${id}. Maybe RukuStatelog was not found or req.body is empty!`
            });
          }
        })
        .catch(err => {
          res.status(500).send({
            message: "Error updating RukuStatelog with id=" + id
          });
        });
  };
  
  //删除
  exports.delete = (req, res) => {
      const id = req.params.id;
      RukuStatelog.destroy({
        where: { id: id }
      })
        .then(num => {
          if (num == 1) {
            res.send({
              message: "RukuStatelog was deleted successfully!"
            });
          } else {
            res.send({
              message: `Cannot delete RukuStatelog with id=${id}. Maybe RukuStatelog was not found!`
            });
          }
        })
        .catch(err => {
          res.status(500).send({
            message: "Could not delete RukuStatelog with id=" + id
          });
        });
  };
  