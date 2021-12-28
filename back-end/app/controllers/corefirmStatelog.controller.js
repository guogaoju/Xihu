const db = require("../models");
const corefirmStatelog = db.corefirmStatelog;
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
    const corefirmStatelogs = {
              userId:req.body.userId,
              core_firmId: req.body.core_firmId,
              oldstateid: req.body.oldstateid,
              newstateid:req.body.newstateid,
              operateId:req.body.operateId,
    };
    corefirmStatelog.create(corefirmStatelogs)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the corefirmStatelog."
        });
      });
  };
  
  //新建
  exports.findAll = (req, res) => {
      const core_firmId = req.query.core_firmId;
      var condition = core_firmId ? { core_firmId: core_firmId}  : null;
    
      corefirmStatelog.findAll({
        where:condition
    })
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while retrieving corefirmStatelog."
          });
        });
  };
  
  //根据id查询
  exports.findOne = (req, res) => {
      const id = req.params.id;
      corefirmStatelog.findByPk(id)
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          res.status(500).send({
            message: "Error retrieving CailiaoStatelog with id=" + id
          });
        });
  };
  
  
  //修改
  exports.update = (req, res) => {
      const id = req.params.id;
      corefirmStatelog.update(req.body, {
        where: { id: id }
      })
        .then(num => {
          if (num == 1) {
            res.send({
              message: "corefirmStatelog was updated successfully."
            });
          } else {
            res.send({
              message: `Cannot update corefirmStatelog with id=${id}. Maybe corefirmStatelog was not found or req.body is empty!`
            });
          }
        })
        .catch(err => {
          res.status(500).send({
            message: "Error updating corefirmStatelog with id=" + id
          });
        });
  };
  
  //删除
  exports.delete = (req, res) => {
      const id = req.params.id;
      corefirmStatelog.destroy({
        where: { id: id }
      })
        .then(num => {
          if (num == 1) {
            res.send({
              message: "corefirmStatelog was deleted successfully!"
            });
          } else {
            res.send({
              message: `Cannot delete corefirmStatelog with id=${id}. Maybe corefirmStatelog was not found!`
            });
          }
        })
        .catch(err => {
          res.status(500).send({
            message: "Could not delete corefirmStatelog with id=" + id
          });
        });
  };
  