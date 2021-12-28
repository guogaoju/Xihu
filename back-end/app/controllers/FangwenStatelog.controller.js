const db = require("../models");
const FangwenStatelog = db.FangwenStatelog;
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
    const FangwenStatelogs = {
              userId:req.body.userId,
              fangwenId: req.body.fangwenId,
              oldstateid: req.body.oldstateid,
              newstateid:req.body.newstateid,
              operateId:req.body.operateId,
    };
    FangwenStatelog.create(FangwenStatelogs)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the FangwenStatelog."
        });
      });
  };
  
  //新建
  exports.findAll = (req, res) => {
      const fangwenId = req.query.fangwenId;
      var condition = fangwenId ? { fangwenId: fangwenId}  : null;
    
      FangwenStatelog.findAll({
        where:condition
    })
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while retrieving FangwenStatelog."
          });
        });
  };
  
  //根据id查询
  exports.findOne = (req, res) => {
      const id = req.params.id;
      FangwenStatelog.findByPk(id)
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          res.status(500).send({
            message: "Error retrieving Ruku with id=" + id
          });
        });
  };
  
  
  //修改
  exports.update = (req, res) => {
      const id = req.params.id;
      FangwenStatelog.update(req.body, {
        where: { id: id }
      })
        .then(num => {
          if (num == 1) {
            res.send({
              message: "FangwenStatelog was updated successfully."
            });
          } else {
            res.send({
              message: `Cannot update FangwenStatelog with id=${id}. Maybe FangwenStatelog was not found or req.body is empty!`
            });
          }
        })
        .catch(err => {
          res.status(500).send({
            message: "Error updating FangwenStatelog with id=" + id
          });
        });
  };
  
  //删除
  exports.delete = (req, res) => {
      const id = req.params.id;
      FangwenStatelog.destroy({
        where: { id: id }
      })
        .then(num => {
          if (num == 1) {
            res.send({
              message: "FangwenStatelog was deleted successfully!"
            });
          } else {
            res.send({
              message: `Cannot delete FangwenStatelog with id=${id}. Maybe FangwenStatelog was not found!`
            });
          }
        })
        .catch(err => {
          res.status(500).send({
            message: "Could not delete FangwenStatelog with id=" + id
          });
        });
  };
  