const db = require("../models");
const FukuanStatelog = db.FukuanStatelog;
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
    const FukuanStatelogs = {
              userId:req.body.userId,
              fukuanId: req.body.fukuanId,
              oldstateid: req.body.oldstateid,
              newstateid:req.body.newstateid,
              operateId:req.body.operateId,
    };
    FukuanStatelog.create(FukuanStatelogs)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the FukuanStatelog."
        });
      });
  };
  
  //新建
  exports.findAll = (req, res) => {
      const fukuanId = req.query.fukuanId;
      var condition = fukuanId ? { fukuanId: fukuanId}  : null;
    
      FukuanStatelog.findAll({
        where:condition
    })
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while retrieving FukuanStatelog."
          });
        });
  };
  
  //根据id查询
  exports.findOne = (req, res) => {
      const id = req.params.id;
      FukuanStatelog.findByPk(id)
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          res.status(500).send({
            message: "Error retrieving FukuanStatelog with id=" + id
          });
        });
  };
  
  
  //修改
  exports.update = (req, res) => {
      const id = req.params.id;
      FukuanStatelog.update(req.body, {
        where: { id: id }
      })
        .then(num => {
          if (num == 1) {
            res.send({
              message: "FukuanStatelog was updated successfully."
            });
          } else {
            res.send({
              message: `Cannot update FukuanStatelog with id=${id}. Maybe FukuanStatelog was not found or req.body is empty!`
            });
          }
        })
        .catch(err => {
          res.status(500).send({
            message: "Error updating FukuanStatelog with id=" + id
          });
        });
  };
  
  //删除
  exports.delete = (req, res) => {
      const id = req.params.id;
      FukuanStatelog.destroy({
        where: { id: id }
      })
        .then(num => {
          if (num == 1) {
            res.send({
              message: "FukuanStatelog was deleted successfully!"
            });
          } else {
            res.send({
              message: `Cannot delete FukuanStatelog with id=${id}. Maybe FukuanStatelog was not found!`
            });
          }
        })
        .catch(err => {
          res.status(500).send({
            message: "Could not delete FukuanStatelog with id=" + id
          });
        });
  };
  